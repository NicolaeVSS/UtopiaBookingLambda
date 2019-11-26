import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { Airport } from "./Airport";

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

}