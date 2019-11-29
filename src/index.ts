import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import { inspect } from 'util'

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const routes = (new (route.controller as any))[route.action](req, res, next);
            // ATTEMPT
            // .then((resolve) => {
            //     resolve !== null && resolve !== undefined ? res.send(resolve) : undefined
            // })
            // .catch((reject) => {
            //     console.log("\nRejected promise in index.ts:\n" + reject + "\n");
            // });

            // ORIGINAL CODE
            // if (result instanceof Promise) {
            //     result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)
            // } 
            // else if (result !== null && result !== undefined) {
            //     res.json(result);
            // }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000 to see results");

}).catch(error => console.log(error));
