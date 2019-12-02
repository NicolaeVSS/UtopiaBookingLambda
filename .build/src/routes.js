"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("./controller/UserController");
const FlightPathController_1 = require("./controller/FlightPathController");
const FlightController_1 = require("./controller/FlightController");
const TicketController_1 = require("./controller/TicketController");
const BookingController_1 = require("./controller/BookingController");
const AirportController_1 = require("./controller/AirportController");
exports.Routes = [
    {
        method: "get",
        route: "/user",
        controller: UserController_1.UserController,
        action: "all"
    }, {
        method: "get",
        route: "/user/:id",
        controller: UserController_1.UserController,
        action: "one"
    }, {
        method: "post",
        route: "/user",
        controller: UserController_1.UserController,
        action: "save"
    }, {
        method: "delete",
        route: "/user/:id",
        controller: UserController_1.UserController,
        action: "remove"
    }, {
        method: "get",
        route: "/airport/:airportCode",
        controller: AirportController_1.AirportController,
        action: "one"
    }, {
        method: "get",
        route: "/airport",
        controller: AirportController_1.AirportController,
        action: "all"
    }, {
        method: "post",
        route: "/airport",
        controller: AirportController_1.AirportController,
        action: "save"
    }, {
        method: "delete",
        route: "/airport/:airportCode",
        controller: AirportController_1.AirportController,
        action: "remove"
    },
    {
        method: "get",
        route: "/flightpath",
        controller: FlightPathController_1.FlightPathController,
        action: "all"
    }, {
        method: "get",
        route: "/flightpath/:flightPathId",
        controller: FlightPathController_1.FlightPathController,
        action: "one"
    }, {
        method: "post",
        route: "/flightpath",
        controller: FlightPathController_1.FlightPathController,
        action: "save"
    }, {
        method: "delete",
        route: "/flightpath/:flightPathId",
        controller: FlightPathController_1.FlightPathController,
        action: "remove"
    },
    {
        method: "get",
        route: "/flight",
        controller: FlightController_1.FlightController,
        action: "all"
    }, {
        method: "get",
        route: "/flight/:flightId",
        controller: FlightController_1.FlightController,
        action: "one"
    }, {
        method: "get",
        route: "/flight/:srcAirport/to/:destAirport",
        controller: FlightController_1.FlightController,
        action: "betweenTwoAirports"
    }, {
        method: "post",
        route: "/flight",
        controller: FlightController_1.FlightController,
        action: "save"
    }, {
        method: "delete",
        route: "/flight/:flightId",
        controller: FlightController_1.FlightController,
        action: "remove"
    },
    {
        method: "get",
        route: "/ticket",
        controller: TicketController_1.TicketController,
        action: "all"
    }, {
        method: "get",
        route: "/ticket/:ticketId",
        controller: TicketController_1.TicketController,
        action: "one"
    }, {
        method: "post",
        route: "/ticket",
        controller: TicketController_1.TicketController,
        action: "save"
    }, {
        method: "delete",
        route: "/ticket/:ticketId",
        controller: TicketController_1.TicketController,
        action: "remove"
    },
    {
        method: "get",
        route: "/booking",
        controller: BookingController_1.BookingController,
        action: "all"
    }, {
        method: "get",
        route: "/booking/:bookingId",
        controller: BookingController_1.BookingController,
        action: "one"
    }, {
        method: "post",
        route: "/booking",
        controller: BookingController_1.BookingController,
        action: "save"
    }, {
        method: "delete",
        route: "/booking/:bookingId",
        controller: BookingController_1.BookingController,
        action: "remove"
    }
];
//# sourceMappingURL=routes.js.map