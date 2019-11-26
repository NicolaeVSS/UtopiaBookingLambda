import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { Flight } from "./Flight";
import { Booking } from "./Booking";

@Entity({name:'ticket'})
export class Ticket {

    @PrimaryGeneratedColumn()
    ticketId: number;

    // many tickets for one flight
    @ManyToOne(type => Flight, flight => flight.flightId, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "flightId" })
    flight: Flight;

    // many tickets for one booking
    @ManyToOne(type => Booking, booking => booking.bookingId, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "bookingId" })
    booking: Booking;

    @Column()
    cost: number;

}