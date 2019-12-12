import {getRepository, getConnection, getManager} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Ticket} from "../entity/Ticket";
import { Flight } from "../entity/Flight";
import { resolve } from "url";

export class TicketController {
    private ticketRepository = getRepository(Ticket);
    // private flightRepository = getRepository(Flight);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.ticketRepository.find();
    }

    async allByBookingId(request: Request, response: Response, next: NextFunction){
        return this.ticketRepository.find({where: {booking: {bookingId : request.params.bookingId}}});
    }

    async allByUserId(request: Request, response: Response, next: NextFunction){
        const data = await this.ticketRepository.createQueryBuilder('ticket')
            .innerJoinAndSelect('ticket.booking', 'booking')
            .innerJoinAndSelect('booking.user', 'user')
            .innerJoinAndSelect('ticket.flight', 'flight')
            .innerJoinAndSelect('flight.flightPath', 'flightPath')
            .innerJoinAndSelect('flightPath.srcAirport', 'srcAirport')
            .innerJoinAndSelect('flightPath.destAirport', 'destAirport')
            .where('user.userId = :id', { id: request.params.userId })
            .getMany();
        
        response.status(200).json(data);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.ticketRepository.findOneOrFail(request.params.ticketId)
        .then((resolve) => {
            response.status(200).json(resolve);
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let ticket: Ticket = request.body;

        // ticket id must be falsy and not 0
        // ticket date cannot be on or after current date
        // ticket cost cannot be null or undefined and bust be above 0
        // ticket must have a bookingId
        // ticket must have a flightID
        if( ticket.ticketId || (ticket.ticketId == 0) || !(new Date() < new Date(ticket.ticketDate)) || 
            !ticket.cost || !(ticket.cost > 0)|| !ticket.booking.bookingId || !ticket.flight.flightId ){
            return new Promise (() => response.status(400).json());
        }
        else{
            return (this.ticketRepository.save(request.body)
            .then( async (resolve) => {
                response.status(201).json(resolve);
            })
            .catch((reject) => {
                response.status(400).json();
            }));
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.ticketRepository.findOneOrFail(request.params.ticketId)
        .then((resolve) => {
            this.ticketRepository.remove(resolve);
            response.status(204).json();
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }
}