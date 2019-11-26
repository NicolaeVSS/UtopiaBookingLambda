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
}, { // CARD INFO MAPPINGS 
    method: "get",
    route: "/cardinfo/:cardNumber",
    controller: CardInfoController,
    action: "one"
}, {
    method: "get",
    route: "/cardInfo",
    controller: CardInfoController,
    action: "all"
}, {
    method: "post",
    route: "/cardInfo",
    controller: CardInfoController,
    action: "save"
}, {
    method: "delete",
    route: "/cardInfo/:cardNumber",
    controller: CardInfoController,
    action: "remove"
}, { // FLIGHTPATH MAPPINGS
    method: "get",
    route: "/flightpath",
    controller: FlightPathController,
    action: "all"
},{
    method: "get",
    route: "/flightpath/:flightPathId",
    controller: FlightPathController,
    action: "one"
},{
    method: "post",
    route: "/flightpath",
    controller: FlightPathController,
    action: "save"
},{
    method: "delete/:flightPathId",
    route: "/flightpath",
    controller: FlightPathController,
    action: "remove"
}, { // FLIGHT MAPPINGS
    method: "get",
    route: "/flight",
    controller: FlightController,
    action: "all"
}, {
    method: "get",
    route: "/flight/:flightId",
    controller: FlightController,
    action: "one"
}, {
    method: "post",
    route: "/flight",
    controller: FlightController,
    action: "save"
}, {
    method: "delete",
    route: "/flight/:flightId",
    controller: FlightController,
    action: "remove"
}];