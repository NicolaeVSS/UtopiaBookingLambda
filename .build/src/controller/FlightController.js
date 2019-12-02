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
const Flight_1 = require("../entity/Flight");
const FlightPath_1 = require("../entity/FlightPath");
class FlightController {
    constructor() {
        this.flightRepository = typeorm_1.getRepository(Flight_1.Flight);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightRepository.find();
        });
    }
    betweenTwoAirports(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const flightPathRepository = typeorm_1.getRepository(FlightPath_1.FlightPath);
            // find the flightPath connecting the two airport path params
            yield flightPathRepository.findOneOrFail({ where: { srcAirport: request.params.srcAirport, destAirport: request.params.destAirport } })
                .then((resolve) => __awaiter(this, void 0, void 0, function* () {
                // then, find all flights who have that flightPathId
                let flightList = yield typeorm_1.getRepository(Flight_1.Flight)
                    .createQueryBuilder("flight")
                    .where("flight.flightPathId = :id", { id: resolve.flightPathId })
                    .getMany();
                // also return the flightPath object we found earlier, front end might want it
                flightList.forEach((ele) => {
                    ele.flightPath = resolve;
                });
                // return the list of flights
                return new Promise(() => response.status(200).json(flightList));
            }))
                .catch((reject) => {
                return new Promise(() => { response.status(404).json(); });
            });
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightRepository.findOneOrFail(request.params.flightId)
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
            return this.flightRepository.save(request.body);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightRepository.findOneOrFail(request.params.id)
                .then((resolve) => {
                this.flightRepository.remove(resolve);
                response.status(204).json();
            })
                .catch((reject) => {
                response.status(404).json();
            });
        });
    }
}
exports.FlightController = FlightController;
//# sourceMappingURL=FlightController.js.map