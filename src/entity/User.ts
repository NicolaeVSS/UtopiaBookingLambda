import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {CardInfo} from "./CardInfo";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId: number;

    @ManyToOne(type => CardInfo, cardInfo => cardInfo.users, {eager:true, onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({ name: "cardNumber" })
    cardInfo: CardInfo;

    @Column({length: 45})
    userFirstName: string;

    @Column({length: 45})
    userLastName: string;

    @Column({length: 45})
    address: string;

    @Column({length: 45})
    phone: string;

    @Column({length: 45})
    email: string;

}
