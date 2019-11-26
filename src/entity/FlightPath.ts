import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { Airport } from "./Airport";
import { Flight } from "./Flight";

@Entity({name:'flightPath'})
export class FlightPath {

    @PrimaryGeneratedColumn()
    flightPathId: number;

    // many airports for one flight path
    @ManyToOne(type => Airport, airport => airport.airportCode, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "srcAirport" })
    srcAirport: Airport;

    // many airports for one flight path
    @ManyToOne(type => Airport, airport => airport.airportCode, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "destAirport" })
    destAirport: Airport;

    // one flightpath for many flights
    @OneToMany(type => Flight, flights => flights.flightId, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    flights: Flight[];
}