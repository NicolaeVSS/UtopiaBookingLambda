import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {CardInfo} from "./CardInfo";
import { Booking } from "./Booking";

@Entity({name:'user'})
export class User {

    @PrimaryGeneratedColumn()
    userId: number;

    // Many cards for one user
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

    // one user for many bookings 
    @OneToMany(type => Booking, booking => booking.bookingId, {onDelete:'CASCADE',onUpdate:'CASCADE'})
    bookings: Booking[];

}
