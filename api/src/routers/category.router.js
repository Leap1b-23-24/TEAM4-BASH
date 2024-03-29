"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var categoryRouter = express_1.Router();
categoryRouter.post("add", controllers_1.postCategory).get("get", controllers_1.getCategory);
exports.default = categoryRouter;
