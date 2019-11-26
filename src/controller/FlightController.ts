import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Flight} from "../entity/Flight";

export class FlightController {

    private flightRepository = getRepository(Flight);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.flightRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.flightRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.flightRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let flightToRemove = await this.flightRepository.findOne(request.params.id);
        await this.flightRepository.remove(flightToRemove);
    }

}