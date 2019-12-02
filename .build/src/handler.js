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
const serverless = require('serverless-http');
const index_1 = require("./index");
// a little janky, but it works
let isCreated = false;
let handler;
function http(event, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isCreated) {
            handler = yield serverless(yield index_1.default());
            isCreated = true;
        }
        return yield handler(event, context);
        // await boostrap
        // .then( async (app) => {
        //     const handler = serverless(app);
        //     return handler(event, context);
        // })
        // .catch((reject) => {
        //     console.log("BOOTSTRAP REJECTED")
        // });
    });
}
exports.http = http;
//# sourceMappingURL=handler.js.map