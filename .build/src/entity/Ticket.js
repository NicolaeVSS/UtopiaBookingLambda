"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Flight_1 = require("./Flight");
const Booking_1 = require("./Booking");
let Ticket = class Ticket {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int",
        name: "ticketId"
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "ticketId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Flight_1.Flight, (flight) => flight.tickets, { eager: true, nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'flightId' }),
    __metadata("design:type", Flight_1.Flight)
], Ticket.prototype, "flight", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Booking_1.Booking, (booking) => booking.tickets, { eager: true, nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'bookingId' }),
    __metadata("design:type", Booking_1.Booking)
], Ticket.prototype, "booking", void 0);
__decorate([
    typeorm_1.Column("decimal", {
        nullable: false,
        name: "cost"
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "cost", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: false,
        name: "ticketDate"
    }),
    __metadata("design:type", String)
], Ticket.prototype, "ticketDate", void 0);
Ticket = __decorate([
    typeorm_1.Entity("ticket", { schema: "utopia" }),
    typeorm_1.Index("ticketId_UNIQUE", ["ticketId",], { unique: true }),
    typeorm_1.Index("flightId_idx", ["flight",]),
    typeorm_1.Index("bookingId_idx", ["booking",])
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=Ticket.js.map