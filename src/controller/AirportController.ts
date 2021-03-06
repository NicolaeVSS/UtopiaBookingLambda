import { getRepository, getConnectionManager} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Airport} from "../entity/Airport";

export class AirportController {

    private airportRepository = getRepository(Airport);

    async all(request: Request, response: Response, next: NextFunction){
        return this.airportRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction){
        console.log("find one airport\n");

        return this.airportRepository.findOneOrFail(request.params.airportCode)
        .then((resolve) => {
            response.status(200).json(resolve);
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {

        let airport: Airport = request.body;

        if(!airport.airportCode){
            return new Promise (() => response.status(400).json());
        }
        else{
            return (this.airportRepository.save(request.body)
            .then((resolve) => {
                response.status(201).json(resolve);
            })
            .catch((reject) => {
                response.status(400).json();
            }));
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        
        return this.airportRepository.findOneOrFail(request.params.airportCode)
        .then((resolve) => {
            this.airportRepository.remove(resolve);
            response.status(204).json();
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }
}