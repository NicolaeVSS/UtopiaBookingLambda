import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import { connect } from "net";
import { CardInfo } from "./entity/CardInfo";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(CardInfo, {
    //     cardNumber:"1111",
    //     expirationDate: "1111-11-11",
    //     cvv: 1111,
    //     cardHolderName: "1111"
    // }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/user to see results");

}).catch(error => console.log(error));
