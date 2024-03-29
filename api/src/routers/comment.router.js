"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var commentRouter = express_1.Router();
commentRouter.post("/rate", controllers_1.postComment).post("/all", controllers_1.getAllComment);
exports.default = commentRouter;
