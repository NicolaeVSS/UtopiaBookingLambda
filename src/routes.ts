import { UserController } from "./controller/UserController";
import { FlightPathController } from "./controller/FlightPathController"
import { FlightController } from "./controller/FlightController";
import { TicketController } from "./controller/TicketController";
import { BookingController } from "./controller/BookingController";
import { AirportController } from "./controller/AirportController";

export const Routes = [
    { // USER MAPPINGS
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
    }, { // AIRPORT MAPPINGS
        method: "get",
        route: "/airport/:airportCode",
        controller: AirportController,
        action: "one"
    }, {
        method: "get",
        route: "/airport",
        controller: AirportController,
        action: "all"
    }, {
        method: "post",
        route: "/airport",
        controller: AirportController,
        action: "save"
    }, {
        method: "delete",
        route: "/airport/:airportCode",
        controller: AirportController,
        action: "remove"
    }, 
    { // FLIGHTPATH MAPPINGS
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
    }, {
        method: "delete",
        route: "/flightpath/:flightPathId",
        controller: FlightPathController,
        action: "remove"
    }, 
    { // FLIGHT MAPPINGS
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
        method: "get",
        route: "/flight/:srcAirport/to/:destAirport",
        controller: FlightController,
        action: "betweenTwoAirports"
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
    }, 
    { // TICKET MAPPINGS
        method: "get",
        route: "/ticket",
        controller: TicketController,
        action: "all"
    }, {
        method: "get",
        route: "/ticket/:ticketId",
        controller: TicketController,
        action: "one"
    }, {
        method: "post",
        route: "/ticket",
        controller: TicketController,
        action: "save"
    }, {
        method: "delete",
        route: "/ticket/:ticketId",
        controller: TicketController,
        action: "remove"
    }, 
    { // BOOKING MAPPINGS
        method: "get",
        route: "/booking",
        controller: BookingController,
        action: "all"
    }, {
        method: "get",
        route: "/booking/:bookingId",
        controller: BookingController,
        action: "one"
    }, {
        method: "post",
        route: "/booking",
        controller: BookingController,
        action: "save"
    }, {
        method: "delete",
        route: "/booking/:bookingId",
        controller: BookingController,
        action: "remove"
    }
];