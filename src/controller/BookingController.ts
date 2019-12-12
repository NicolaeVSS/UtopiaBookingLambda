import {getRepository, getManager, QueryBuilder} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Booking} from "../entity/Booking";
import { Flight } from "../entity/Flight";
import { Ticket } from "../entity/Ticket";
import { resolve } from "url";
import { User } from "../entity/User";

export class BookingController {

    private bookingRepository = getRepository(Booking);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.bookingRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.bookingRepository.findOneOrFail(request.params.bookingId)
        .then((resolve) => {
            response.status(200).json(resolve);
        })
        .catch((reject) => {
            // console.log(reject);
            response.status(404).json();
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const userId: number = parseInt(request.body.userId)!;
        const flightId: number = parseInt(request.body.flightId)!;
        const ticketCount: number = parseInt(request.body.ticketCount!);
        const ticketDate: Date = new Date(request.body.ticketDate!);
        const ticketCost: number = parseFloat(request.body.ticketCost!);

        // bookingId must be falsy and not 0
        // userId cannot be falsy
        // isPaid must be 0
        // bookDate must be within 24hrs of current date
        // all header params cannot be falsey or 0
        if( !userId || (userId == 0) || 
            !flightId || flightId < 1 ||
            !ticketCount || ticketCount < 1 ||
            !ticketDate || !(new Date() < ticketDate) ||
            !ticketCost || ticketCost < 1)
        {
            return new Promise (() => response.status(400).json());
        }

        // Instantiate the booking
        const booking: Booking =  new Booking();
        booking.bookDate = new Date();
        booking.isPaid = 0;
        booking.user = new User();
        booking.user.userId = userId;

        // if the transaction did succeed and all tickets were made, return a 201 and the savedBooking
        // otherwise return a 400 and nothing in the body
        return await getManager().transaction(async transactionalEntityManager => {
            // get the flight this booking is for
            const selectedFlight: Flight = await transactionalEntityManager.getRepository(Flight).findOneOrFail(flightId)
                .then(async (selectedFlight) => {
                    return selectedFlight;
                });
            
            // if the flight has insufficient seats, cancel the transcation and roll back the ticket creating
            if(selectedFlight.totalSeats < ticketCount){
                throw "not enough seats!";
            }
            
            // otherwise, remove the seats and save
            selectedFlight.totalSeats -= ticketCount;
            await transactionalEntityManager.getRepository(Flight).save(selectedFlight);
            
            console.log("saving booking")
            // create the booking
            const savedBooking: Booking = await transactionalEntityManager.getRepository(Booking).save(booking)
                .then((resolve) => {
                    return resolve;
                });

            // create the tickets
            for(let i = 0 ; i < ticketCount; ++i){
                const bookingTicket: Ticket = new Ticket();
                bookingTicket.flight= selectedFlight;
                bookingTicket.booking= savedBooking;
                bookingTicket.cost= ticketCost;
                bookingTicket.ticketDate= ticketDate.toISOString().slice(0, 10);

                await transactionalEntityManager.getRepository(Ticket).save(bookingTicket)
                    .then((resolve) => {
                        return resolve;
                    });
            }

            // once both these operations are done (via awaiting) return the saved booking
            response.status(201).json(savedBooking);
        
        }).catch((reject) => {
            // should any exception occur, the transaction will be rolled back and a 400 returned
            console.log("FAILED BOOKING TRANSACTION:\n" + reject + "\n")
            response.status(400).json();
        });
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.bookingRepository.findOneOrFail(request.params.bookingId)
        .then((resolve) => {
            this.bookingRepository.remove(resolve);
            response.status(204).json();
        })
        .catch((reject) => {
            // console.log(reject);
            response.status(404).json();
        });
    }

}