import {UserController} from "./controller/UserController";
import {CardInfoController} from "./controller/CardInfoController";
import {FlightPathController} from "./controller/FlightPathController"

export const Routes = [{
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
}, {
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
    method: "get",
    route: "/flightpath",
    controller: FlightPathController,
    action: "all"
}];