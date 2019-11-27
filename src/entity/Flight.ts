import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { FlightPath } from "../entity/FlightPath";
import { Ticket } from "./Ticket";

@Entity({name:'flight'})
export class Flight {

    @PrimaryGeneratedColumn()
    flightId: number;

    // many flights for one flight path
    @ManyToOne(type => FlightPath, flightPath => flightPath.flightPathId, {eager:true, onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({ name: "flightPathId" })
    flightPath: FlightPath;

    @Column({length: 45})
    plane: string;

    @Column({type:'datetime'})
    arrivalTime: string;

    @Column({type:'datetime'})
    departureTime: string;

    @Column({type:'integer'})
    totalSeats: number;

    // one flight for many tickets
    @OneToMany(type => Ticket, ticket => ticket.ticketId, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    tickets: Ticket[];

}