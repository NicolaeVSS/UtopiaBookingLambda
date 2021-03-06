import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {FlightPath} from "../entity/FlightPath";

export class FlightPathController {

    private flightPathRepository = getRepository(FlightPath);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.flightPathRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.flightPathRepository.findOneOrFail(request.params.flightPathId)
        .then((resolve) => {
            response.status(200).json(resolve);
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.flightPathRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.flightPathRepository.findOneOrFail(request.params.id)
        .then((resolve) => {
            this.flightPathRepository.remove(resolve);
            response.status(204).json();
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }

}