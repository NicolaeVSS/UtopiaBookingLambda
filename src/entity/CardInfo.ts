import {Entity, Column, PrimaryColumn, OneToMany, JoinColumn} from "typeorm";
import { User } from '../entity/User'

@Entity({name:'cardInfo'})
export class CardInfo {

    @PrimaryColumn({length: 16, nullable:false})
    cardNumber: string;

    @Column({type:'date'})
    expirationDate: string;

    @Column({type:'integer', width: 4})
    cvv: number;

    @Column({length: 45})
    cardHolderName: string;
    
    @OneToMany(type => User, user => user.cardInfo, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    users: User[];
}