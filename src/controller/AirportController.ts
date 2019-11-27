import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Airport} from "../entity/Airport";

export class AirportController {

    private airportRepository = getRepository(Airport);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.airportRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        let airportPromise = this.airportRepository.findOne();

        airportPromise.catch((err)=>{
            response.status(404).json("not found");
        });

        airportPromise.then((res) => {
            console.log(res)
            response.status(200).json("found")
        })

        return response;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.airportRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let airportToRemove = await this.airportRepository.findOne(request.params.id);
        await this.airportRepository.remove(airportToRemove);
    }

}