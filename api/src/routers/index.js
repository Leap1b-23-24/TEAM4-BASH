"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_router_1 = __importDefault(require("./product.router"));
var auth_router_1 = __importDefault(require("./auth.router"));
var category_router_1 = __importDefault(require("./category.router"));
var comment_router_1 = __importDefault(require("./comment.router"));
var address_router_1 = __importDefault(require("./address.router"));
exports.default = {
    productRouter: product_router_1.default,
    authRouter: auth_router_1.default,
    categoryRouter: category_router_1.default,
    commentRouter: comment_router_1.default,
    addressRouter: address_router_1.default,
};
