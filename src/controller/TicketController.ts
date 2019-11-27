import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Ticket} from "../entity/Ticket";

export class TicketController {

    private ticketRepository = getRepository(Ticket);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.ticketRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.ticketRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.ticketRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let ticketToRemove = await this.ticketRepository.findOne(request.params.id);
        await this.ticketRepository.remove(ticketToRemove);
    }

}