import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { FlightPath } from "../entity/FlightPath";

@Entity({name:'flight'})
export class Flight {

    @PrimaryGeneratedColumn()
    flightId: number;

    @ManyToOne(type => FlightPath, flightPath => flightPath.flightPathId, {eager:true, onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({ name: "destAirport" })
    flightPath: FlightPath;

    @Column({length: 45})
    plane: string;

    @Column({type:'datetime'})
    arrivalTime: string;

    @Column({type:'datetime'})
    departureTime: string;

    @Column({type:'integer'})
    totalSeats: number;

}