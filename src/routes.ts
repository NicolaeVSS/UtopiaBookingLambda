import {UserController} from "./controller/UserController";
import {CardInfoController} from "./controller/CardInfoController";
import {FlightPathController} from "./controller/FlightPathController"
import { FlightController } from "./controller/FlightController";

export const Routes = [{
    // USER MAPPINGS
    method: "get",
    route: "/user",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/user/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/user",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/user/:id",
    controller: UserController,
    action: "remove"
}, { // CREDIT MAPPINGS 
    method: "get",
    route: "/cardinfo/:cardNumber",
    controller: CardInfoController,
    action: "one"
}, {
    method: "get",
    route: "/cardInfo",
    controller: CardInfoController,
    action: "all"
}, { // FLIGHTPATH MAPPINGS
    method: "get",
    route: "/flightpath",
    controller: FlightPathController,
    action: "all"
}, { // FLIGHT MAPPINGS
    method: "get",
    route: "/flight",
    controller: FlightController,
    action: "all"
}];