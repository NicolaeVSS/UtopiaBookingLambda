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
const User_1 = require("./User");
const Ticket_1 = require("./Ticket");
let Booking = class Booking {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int",
        name: "bookingId"
    }),
    __metadata("design:type", Number)
], Booking.prototype, "bookingId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.bookings, { eager: true, nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", Object)
], Booking.prototype, "user", void 0);
__decorate([
    typeorm_1.Column("tinyint", {
        nullable: false,
        default: () => "'0'",
        name: "isPaid"
    }),
    __metadata("design:type", Number)
], Booking.prototype, "isPaid", void 0);
__decorate([
    typeorm_1.Column("datetime", {
        nullable: false,
        name: "bookDate"
    }),
    __metadata("design:type", Date)
], Booking.prototype, "bookDate", void 0);
__decorate([
    typeorm_1.OneToMany(() => Ticket_1.Ticket, (ticket) => ticket.booking, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Booking.prototype, "tickets", void 0);
Booking = __decorate([
    typeorm_1.Entity("booking", { schema: "utopia" }),
    typeorm_1.Index("userId_idx", ["user",])
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=Booking.js.map