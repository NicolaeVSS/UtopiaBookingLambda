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
const FlightPath_1 = require("../entity/FlightPath");
class FlightPathController {
    constructor() {
        this.flightPathRepository = typeorm_1.getRepository(FlightPath_1.FlightPath);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightPathRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightPathRepository.findOneOrFail(request.params.flightPathId)
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
            return this.flightPathRepository.save(request.body);
        });
    }
    remove(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flightPathRepository.findOneOrFail(request.params.id)
                .then((resolve) => {
                this.flightPathRepository.remove(resolve);
                response.status(204).json();
            })
                .catch((reject) => {
                response.status(404).json();
            });
        });
    }
}
exports.FlightPathController = FlightPathController;
//# sourceMappingURL=FlightPathController.js.map