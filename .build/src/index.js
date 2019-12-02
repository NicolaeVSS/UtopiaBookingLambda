"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes_1 = require("./routes");
const Airport_1 = require("./entity/Airport");
const User_1 = require("./entity/User");
const Booking_1 = require("./entity/Booking");
const Ticket_1 = require("./entity/Ticket");
const Flight_1 = require("./entity/Flight");
const FlightPath_1 = require("./entity/FlightPath");
const config_1 = require("../config");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        // create express app
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());
        const info = {
            type: "mysql",
            host: config_1.default.TYPEORM_HOST,
            port: 3306,
            username: config_1.default.TYPEORM_USERNAME,
            password: config_1.default.TYPEORM_PASSWORD,
            database: config_1.default.TYPEORM_DATABASE,
            synchronize: false,
            logging: false,
            entities: [User_1.User, Booking_1.Booking, Ticket_1.Ticket, Flight_1.Flight, FlightPath_1.FlightPath, Airport_1.Airport]
        };
        const connection = yield typeorm_1.createConnection(info);
        app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log("health check\n");
            return res.status(200).json({ message: "I'm alive! " + new Date() });
        }));
        // register express routes from defined application routes
        routes_1.Routes.forEach(route => {
            app[route.method](route.route, (req, res, next) => {
                const result = (new route.controller)[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
                    result.catch(reject => { console.log(reject); });
                }
                else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        });
        // start express server
        // app.listen(3000);
        // console.log("Express server has started on port 3000. Open http://localhost:3000 to see results");
        return app;
    });
}
exports.default = bootstrap;
//# sourceMappingURL=index.js.map