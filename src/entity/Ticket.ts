import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
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
    ticketId:number;
        

   
    @ManyToOne(()=>Flight, (flight: Flight)=>flight.tickets,{ eager:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'flightId'})
    flight:Flight | null;


   
    @ManyToOne(()=>Booking, (booking: Booking)=>booking.tickets,{ eager:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'bookingId'})
    booking:Booking | null;


    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"cost"
        })
    cost:string;
        

    @Column("date",{ 
        nullable:false,
        name:"ticketDate"
        })
    ticketDate:string;
        
}
