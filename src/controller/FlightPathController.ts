import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {FlightPath} from "../entity/FlightPath";

export class FlightPathController {

    private flightPathRepository = getRepository(FlightPath);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.flightPathRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.flightPathRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.flightPathRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let flightPathToRemove = await this.flightPathRepository.findOne(request.params.id);
        await this.flightPathRepository.remove(flightPathToRemove);
    }

}