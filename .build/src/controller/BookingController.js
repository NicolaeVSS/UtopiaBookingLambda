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
const Booking_1 = require("../entity/Booking");
class BookingController {
    constructor() {
        this.bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
    }
    all(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookingRepository.find();
        });
    }
    one(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bookingRepository.findOneOrFail(request.params.bookingId)
                .then((resolve) => {
                response.status(200).json(resolve);
            })
                .catch((reject) => {
                // console.log(reject);
                response.status(404).json();
            });
        });
    }
    save(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const booking = request.body;
            // bookingId must be falsy and not 0
            // userId cannot be falsy
            // isPaid must be 0
            // bookDate must be within 24hrs of current date
            if (booking.bookingId || (booking.bookingId == 0) ||
                !booking.user || !booking.user.userId || booking.isPaid !== 0 ||
                (Math.abs(new Date(booking.bookDate).getTime() - new Date().getTime())) > 8.64e+7) {
                return new Promise(() => response.status(400).json());
            }
            else {
                return (this.bookingRepository.save(request.body)
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
            return this.bookingRepository.findOneOrFail(request.params.bookingId)
                .then((resolve) => {
                this.bookingRepository.remove(resolve);
                response.status(204).json();
            })
                .catch((reject) => {
                // console.log(reject);
                response.status(404).json();
            });
        });
    }
}
exports.BookingController = BookingController;
//# sourceMappingURL=BookingController.js.map