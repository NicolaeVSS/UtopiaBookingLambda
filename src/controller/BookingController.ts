import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Booking} from "../entity/Booking";

export class BookingController {

    private bookingRepository = getRepository(Booking);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.bookingRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.bookingRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.bookingRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let bookingToRemove = await this.bookingRepository.findOne(request.params.id);
        await this.bookingRepository.remove(bookingToRemove);
    }

}