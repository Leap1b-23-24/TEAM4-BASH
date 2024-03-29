"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = require("../controllers/product.controller");
var productRouter = express_1.Router();
productRouter
    .post("/add", product_controller_1.postProduct)
    .get("/plus", product_controller_1.getProduct)
    .post("/delete", product_controller_1.deleteProduct)
    .post("/editProduct", product_controller_1.editProduct)
    .get("/allPro", product_controller_1.getAllProduct)
    .post("/star", product_controller_1.starReview)
    .post("/sold", product_controller_1.soldQnty);
exports.default = productRouter;
