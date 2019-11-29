import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {CardInfo} from "./CardInfo";
import {Booking} from "./Booking";


@Entity("user" ,{schema:"utopia" } )
@Index("userId_UNIQUE",["userId",],{unique:true})
@Index("cardNumber_idx",["cardNumber",])
export class User {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"userId"
        })
    userId:number;

    @ManyToOne(()=>CardInfo, (cardInfo: CardInfo)=>cardInfo.users,{ eager:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'cardNumber'})
    cardNumber:CardInfo | null;

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
