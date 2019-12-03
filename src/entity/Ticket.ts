import {Column,Entity,Index,JoinColumn,ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import {Flight} from "./Flight";
import {Booking} from "./Booking";


@Entity("ticket" ,{schema:"utopia" } )
@Index("ticketId_UNIQUE",["ticketId",],{unique:true})
@Index("flightId_idx",["flight",])
@Index("bookingId_idx",["booking",])
export class Ticket {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"ticketId"
        })
    ticketId:number | null;
   
    @ManyToOne(()=>Flight, (flight: Flight)=>flight.tickets,{ eager:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'flightId'})
    flight:Flight;
   
    @ManyToOne(()=>Booking, (booking: Booking)=>booking.tickets,{ eager:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'bookingId'})
    booking:Booking;

    @Column("decimal",{ 
        nullable:false,
        name:"cost",
        })
    cost:number;      

    @Column("date",{ 
        nullable:false,
        name:"ticketDate"
        })
    ticketDate:string;
        
}
