import {Entity, Column, PrimaryColumn, OneToMany, JoinColumn} from "typeorm";
import {FlightPath} from "../entity/FlightPath";

@Entity({name:'airport'})
export class Airport {

    @PrimaryColumn({length: 4, nullable:false})
    airportCode: string;

    @Column({length: 45})
    airportName: string;

    @Column({length: 45})
    city: string;

    @Column()
    zip: string;
    
    @OneToMany(type => FlightPath, (flightPath) => flightPath.srcAirport, {onDelete:'CASCADE', onUpdate:'CASCADE'})
    destFlightPaths: FlightPath[];
    
    @OneToMany(type => FlightPath, (flightPath) => flightPath.destAirport, {onDelete:'CASCADE', onUpdate:'CASCADE'})
    srcFlightPaths: FlightPath[];

}