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
        // const booking: Booking = request.body;

        return this.bookingRepository.save(request.body);
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