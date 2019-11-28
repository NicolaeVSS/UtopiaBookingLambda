import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Airport} from "./Airport";
import {Flight} from "./Flight";


@Entity("flightPath" ,{schema:"utopia" } )
@Index("airportId_idx",["srcAirport",])
@Index("airportId_idx1",["destAirport",])
export class FlightPath {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"flightPathId"
        })
    flightPathId:number;
        

   
    @ManyToOne(()=>Airport, (airport: Airport)=>airport.flightPaths2,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'srcAirport'})
    srcAirport:Airport | null;


   
    @ManyToOne(()=>Airport, (airport: Airport)=>airport.flightPaths,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'destAirport'})
    destAirport:Airport | null;


   
    @OneToMany(()=>Flight, (flight: Flight)=>flight.flightPath,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    flights:Flight[];
    
}
