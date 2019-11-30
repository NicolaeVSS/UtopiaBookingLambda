import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Booking} from "../entity/Booking";

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
        const booking: Booking = request.body;

        // bookingId must be falsy and not 0
        // userId cannot be falsy
        // isPaid must be 0
        // bookDate must be within 24hrs of current date
        if( booking.bookingId || (booking.bookingId == 0) || 
            !booking.user || !booking.user.userId || booking.isPaid !== 0 ||
            (Math.abs(new Date(booking.bookDate).getTime() - new Date().getTime())) > 8.64e+7){

            return new Promise (() => response.status(400).json());
        }
        else{
            return (this.bookingRepository.save(request.body)
            .then((resolve) => {
                response.status(201).json(resolve);
            })
            .catch((reject) => {
                response.status(400).json();
            }));
        }
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