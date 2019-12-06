import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {FlightPath} from "./FlightPath";
import {Ticket} from "./Ticket";


@Entity("flight" ,{schema:"utopia" } )
@Index("flightPathId_idx",["flightPath",])
export class Flight {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"flightId"
        })
    flightId:number;

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"plane"
        })
    plane:string;

    @Column("time",{ 
        nullable:false,
        name:"arrivalTime"
        })
    arrivalTime:string;

    @Column("time",{ 
        nullable:false,
        name:"departureTime"
        })
    departureTime:string;

    @Column("int",{ 
        nullable:true,
        name:"totalSeats"
        })
    totalSeats:number;
   
    @ManyToOne(()=>FlightPath, (flightPath: FlightPath)=>flightPath.flights,{eager:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'flightPathId'})
    flightPath:FlightPath;
   
    @OneToMany(()=>Ticket, (ticket: Ticket)=>ticket.flight,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    tickets:Ticket[];
    
}
