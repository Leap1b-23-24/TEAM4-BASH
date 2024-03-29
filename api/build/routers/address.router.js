"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var addressRouter = express_1.Router();
addressRouter.post("/post", controllers_1.postAddress).get("/get", controllers_1.getAddress);
exports.default = addressRouter;
