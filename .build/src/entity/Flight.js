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
const FlightPath_1 = require("./FlightPath");
const Ticket_1 = require("./Ticket");
let Flight = class Flight {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int",
        name: "flightId"
    }),
    __metadata("design:type", Number)
], Flight.prototype, "flightId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 45,
        name: "plane"
    }),
    __metadata("design:type", String)
], Flight.prototype, "plane", void 0);
__decorate([
    typeorm_1.Column("time", {
        nullable: false,
        name: "arrivalTime"
    }),
    __metadata("design:type", String)
], Flight.prototype, "arrivalTime", void 0);
__decorate([
    typeorm_1.Column("time", {
        nullable: false,
        name: "departureTime"
    }),
    __metadata("design:type", String)
], Flight.prototype, "departureTime", void 0);
__decorate([
    typeorm_1.Column("int", {
        nullable: true,
        name: "totalSeats"
    }),
    __metadata("design:type", Number)
], Flight.prototype, "totalSeats", void 0);
__decorate([
    typeorm_1.ManyToOne(() => FlightPath_1.FlightPath, (flightPath) => flightPath.flights, { eager: true, nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'flightPathId' }),
    __metadata("design:type", FlightPath_1.FlightPath)
], Flight.prototype, "flightPath", void 0);
__decorate([
    typeorm_1.OneToMany(() => Ticket_1.Ticket, (ticket) => ticket.flight, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Flight.prototype, "tickets", void 0);
Flight = __decorate([
    typeorm_1.Entity("flight", { schema: "utopia" }),
    typeorm_1.Index("flightPathId_idx", ["flightPath",])
], Flight);
exports.Flight = Flight;
//# sourceMappingURL=Flight.js.map