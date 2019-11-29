import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {User} from "./User";
import {Ticket} from "./Ticket";


@Entity("booking" ,{schema:"utopia" } )
@Index("userId_idx",["user",])
export class Booking {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"bookingId"
        })
    bookingId:number;
        
    @ManyToOne(()=>User, (user: User)=>user.bookings,{ eager:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'userId'})
    user:User | null;

    @Column("tinyint",{ 
        nullable:false,
        default: () => "'0'",
        name:"isPaid"
        })
    isPaid:number;

    @Column("datetime",{ 
        nullable:false,
        name:"bookDate"
        })
    bookDate:Date;
   
    @OneToMany(()=>Ticket, (ticket: Ticket)=>ticket.booking,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    tickets:Ticket[];
    
}
