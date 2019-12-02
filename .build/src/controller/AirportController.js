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
const Airport_1 = require("../entity/Airport");
class AirportController {
    constructor() {
        this.airportRepository = typeorm_1.getRepository(Airport_1.Airport);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.airportRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("find one airport\n");
            return this.airportRepository.findOneOrFail(request.params.airportCode)
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
            let airport = request.body;
            if (!airport.airportCode) {
                return new Promise(() => response.status(400).json());
            }
            else {
                return (this.airportRepository.save(request.body)
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
            return this.airportRepository.findOneOrFail(request.params.airportCode)
                .then((resolve) => {
                this.airportRepository.remove(resolve);
                response.status(204).json();
            })
                .catch((reject) => {
                response.status(404).json();
            });
        });
    }
}
exports.AirportController = AirportController;
//# sourceMappingURL=AirportController.js.map