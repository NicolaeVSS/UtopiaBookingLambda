import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { Airport } from "./Airport";
import { Flight } from "./Flight";

@Entity({name:'flightPath'})
export class FlightPath {

    @PrimaryGeneratedColumn()
    flightPathId: number;

    @ManyToOne(type => Airport, airport => airport.airportCode, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "srcAirport" })
    srcAirport: Airport;

    @ManyToOne(type => Airport, airport => airport.airportCode, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "destAirport" })
    destAirport: Airport;

    @OneToMany(type => Flight, flights => flights.flightId, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    flights: Flight[];
}