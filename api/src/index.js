"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var database_1 = require("./database");
var port = 8008;
database_1.connect();
app_1.default.listen(port, function () {
    console.log("Listening on port " + port);
});
