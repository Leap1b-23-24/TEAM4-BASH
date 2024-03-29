"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = exports.categorySchema = void 0;
var mongoose_1 = require("mongoose");
exports.categorySchema = new mongoose_1.Schema({
    category: {
        type: String,
        require: true,
    },
    createdAt: Date,
    updatedAt: Date,
});
exports.CategoryModel = mongoose_1.model("category", exports.categorySchema);
