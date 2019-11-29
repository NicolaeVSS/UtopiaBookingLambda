import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {FlightPath} from "./FlightPath";


@Entity("airport" ,{schema:"utopia" } )
export class Airport {

    @Column("char",{ 
        nullable:false,
        primary:true,
        length:4,
        name:"airportCode"
        })
    airportCode:string;

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"airportName"
        })
    airportName:string;

    @Column("varchar",{ 
        nullable:false,
        length:45,
        name:"city"
        })
    city:string;

    @Column("int",{ 
        nullable:false,
        name:"zip"
        })
    zip:number;
   
    @OneToMany(()=>FlightPath, (flightPath: FlightPath)=>flightPath.destAirport,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    flightPaths:FlightPath[];
    
    @OneToMany(()=>FlightPath, (flightPath: FlightPath)=>flightPath.srcAirport,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    flightPaths2:FlightPath[];
    
}
