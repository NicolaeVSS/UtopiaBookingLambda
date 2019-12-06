import "reflect-metadata";
import {createConnection, Connection, ConnectionOptions} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import {Request, Response} from "express";
import {Routes} from "./routes";
import { Airport } from "./entity/Airport";
import { User } from "./entity/User";
import { Booking } from "./entity/Booking";
import { Ticket } from "./entity/Ticket";
import { Flight } from "./entity/Flight";
import { FlightPath } from "./entity/FlightPath";
import CONFIG from '../config';
import { NextFunction } from "connect";

async function bootstrap(){
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(cors());

    app.use(function(req: Request, res:Response, next:NextFunction) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, flightid");
        next();
    });

    const info: ConnectionOptions = {
        type: "mysql",
        host: CONFIG.TYPEORM_HOST,
        port: 3306,
        username: CONFIG.TYPEORM_USERNAME,
        password: CONFIG.TYPEORM_PASSWORD,
        database: CONFIG.TYPEORM_DATABASE,
        synchronize: false,
        logging: false,
        supportBigNumbers: true,
        bigNumberStrings: false,
        entities : [User, Booking, Ticket, Flight, FlightPath, Airport]
    };

    // register a connection to the connection pool
    const connection = await createConnection(info);

    app.get('/', async (req, res) => {
        console.log("health check\n");
        return res.status(200).json({ message:"I'm alive! " + new Date() });
    });

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
                result.catch(reject => {console.log(reject)})

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // start express server
    // app.listen(3000);
    // console.log("Express server has started on port 3000. Open http://localhost:3000 to see results");

    return app;
}

export default bootstrap;