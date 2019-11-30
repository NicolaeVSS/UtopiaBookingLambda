import {Column,Entity,OneToMany} from "typeorm";
import {User} from "./User";


@Entity("cardInfo" ,{schema:"utopia" } )
export class CardInfo {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:16,
        name:"cardNumber"
        })
    cardNumber:string;

    @Column("date",{ 
        nullable:false,
        name:"expirationDate"
        })
    expirationDate:string;

    @Column("int",{ 
        nullable:false,
        name:"cvv"
        })
    cvv:number;

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"cardHolderName"
        })
    cardHolderName:string;

   
    @OneToMany(()=>User, (user: User)=>user.cardNumber,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    users:User[];
    
}
