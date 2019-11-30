import { getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Flight} from "../entity/Flight";
import { FlightPath } from "../entity/FlightPath";

export class FlightController {

    private flightRepository = getRepository(Flight);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.flightRepository.find();
    }
    
    async betweenTwoAirports(request: Request, response: Response, next: NextFunction) {
        const flightPathRepository = getRepository(FlightPath);

        // find the flightPath connecting the two airport path params
        await flightPathRepository.findOneOrFail({ where: { srcAirport: request.params.srcAirport, destAirport: request.params.destAirport } })
        .then(async (resolve) => {
            // then, find all flights who have that flightPathId
            let flightList: Flight[] = await getRepository(Flight)
                                                .createQueryBuilder("flight")
                                                .where("flight.flightPathId = :id", {id: resolve.flightPathId})
                                                .getMany();
            
            // also return the flightPath object we found earlier, front end might want it
            flightList.forEach((ele) => {
                ele.flightPath = resolve;
            });
            
            // return the list of flights
            return new Promise(() => response.status(200).json(flightList));
        })
        .catch((reject) => {
            return new Promise(() => {response.status(404).json()});
        });
    }

    async addFlightPathObject(flights: Flight[], flightPath: FlightPath){
        flights.forEach( (ele) => {
            ele.flightPath = flightPath;
        })
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.flightRepository.findOneOrFail(request.params.flightId)
        .then((resolve) => {
            response.status(200).json(resolve);
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.flightRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let flightToRemove = await this.flightRepository.findOne(request.params.id);
        await this.flightRepository.remove(flightToRemove);
    }

}