import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { User } from "./User";
import { Ticket } from "./Ticket";

@Entity({name:'booking'})
export class Booking {

    @PrimaryGeneratedColumn()
    bookingId: number;

    // many bookings for one user
    @ManyToOne(type => User, user => user.userId, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "userId" })
    user: User;

    // one booking has many tickets, this is an associative entity.
    @ManyToOne(type => Ticket, ticket => ticket.ticketId, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "ticketId" })
    ticket:Ticket;

}