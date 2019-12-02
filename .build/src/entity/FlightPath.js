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
const Airport_1 = require("./Airport");
const Flight_1 = require("./Flight");
let FlightPath = class FlightPath {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int",
        name: "flightPathId"
    }),
    __metadata("design:type", Number)
], FlightPath.prototype, "flightPathId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Airport_1.Airport, (airport) => airport.flightPaths2, { eager: true, nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'srcAirport' }),
    __metadata("design:type", Airport_1.Airport)
], FlightPath.prototype, "srcAirport", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Airport_1.Airport, (airport) => airport.flightPaths, { eager: true, nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'destAirport' }),
    __metadata("design:type", Airport_1.Airport)
], FlightPath.prototype, "destAirport", void 0);
__decorate([
    typeorm_1.OneToMany(() => Flight_1.Flight, (flight) => flight.flightPath, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], FlightPath.prototype, "flights", void 0);
FlightPath = __decorate([
    typeorm_1.Entity("flightPath", { schema: "utopia" }),
    typeorm_1.Index("airportId_idx", ["srcAirport",]),
    typeorm_1.Index("airportId_idx1", ["destAirport",])
], FlightPath);
exports.FlightPath = FlightPath;
//# sourceMappingURL=FlightPath.js.map