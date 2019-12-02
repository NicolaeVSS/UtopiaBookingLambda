"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Ticket_1 = require("../entity/Ticket");
class TicketController {
    constructor() {
        this.ticketRepository = typeorm_1.getRepository(Ticket_1.Ticket);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ticketRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ticketRepository.findOneOrFail(request.params.ticketId)
                .then((resolve) => {
                response.status(200).json(resolve);
            })
                .catch((reject) => {
                response.status(404).json();
            });
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let ticket = request.body;
            // ticket id must be falsy and not 0
            // ticket date cannot be on or after current date
            // ticket cost cannot be null or undefined and bust be above 0
            // ticket must have a bookingId
            // ticket must have a flightID
            if (ticket.ticketId || (ticket.ticketId == 0) || !(new Date() < new Date(ticket.ticketDate)) ||
                !ticket.cost || !(ticket.cost > 0) || !ticket.booking.bookingId || !ticket.flight.flightId) {
                return new Promise(() => response.status(400).json());
            }
            else {
                return (this.ticketRepository.save(request.body)
                    .then((resolve) => {
                    response.status(201).json(resolve);
                })
                    .catch((reject) => {
                    response.status(400).json();
                }));
            }
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ticketRepository.findOneOrFail(request.params.ticketId)
                .then((resolve) => {
                this.ticketRepository.remove(resolve);
                response.status(204).json();
            })
                .catch((reject) => {
                response.status(404).json();
            });
        });
    }
}
exports.TicketController = TicketController;
//# sourceMappingURL=TicketController.js.map