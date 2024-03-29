"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var authRouter = express_1.Router();
authRouter
    .post("/sign", controllers_1.signUp)
    .post("/login", controllers_1.login)
    .get("/user", controllers_1.getUser)
    .get("/all", controllers_1.getAllUser);
exports.default = authRouter;
