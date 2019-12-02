import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {Booking} from "./Booking";


@Entity("user" ,{schema:"utopia" } )
@Index("userId_UNIQUE",["userId",],{unique:true})
export class User {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"userId"
        })
    userId:number;

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"userFirstName"
        })
    userFirstName:string;
        
    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"userLastName"
        })
    userLastName:string;
        
    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"address"
        })
    address:string | null;
        
    @Column("varchar",{ 
        nullable:true,
        length:45,
        name:"phone"
        })
    phone:string | null;
        
    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"email"
        })
    email:string;
        
    @OneToMany(()=>Booking, (booking: Booking)=>booking.user,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    bookings:Booking[];
    
}
