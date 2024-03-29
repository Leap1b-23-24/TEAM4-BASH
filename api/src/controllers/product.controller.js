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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.soldQnty = exports.starReview = exports.deleteProduct = exports.editProduct = exports.getAllProduct = exports.getProduct = exports.postProduct = void 0;
var product_model_1 = require("../models/product.model");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.postProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorization, id, _a, productName, additionInfo, barCode, productImage, mainPrice, quantity, mainCategory, secondCategory, color, size, tag, findProduct, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                authorization = req.headers.authorization;
                if (!authorization) {
                    return [2 /*return*/, res.status(401).json({
                            message: "Burtgelgui hereglegch bna",
                        })];
                }
                id = jsonwebtoken_1.default.verify(authorization, "secret-key").id;
                _a = req.body, productName = _a.productName, additionInfo = _a.additionInfo, barCode = _a.barCode, productImage = _a.productImage, mainPrice = _a.mainPrice, quantity = _a.quantity, mainCategory = _a.mainCategory, secondCategory = _a.secondCategory, color = _a.color, size = _a.size, tag = _a.tag;
                return [4 /*yield*/, product_model_1.ProductModel.findOne({ productName: productName })];
            case 1:
                findProduct = _b.sent();
                if (findProduct) {
                    return [2 /*return*/, res.status(401).json({
                            message: "This product has been added",
                        })];
                }
                return [4 /*yield*/, product_model_1.ProductModel.create({
                        merchId: id,
                        productName: productName,
                        additionInfo: additionInfo,
                        barCode: barCode,
                        productImage: productImage,
                        mainPrice: mainPrice,
                        quantity: quantity,
                        mainCategory: mainCategory,
                        secondCategory: secondCategory,
                        color: color,
                        size: size,
                        tag: tag,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    })];
            case 2:
                _b.sent();
                return [2 /*return*/, res.json({
                        message: "Шинэ бүтээгдэхүүн амжилттай үүслээ.",
                    })];
            case 3:
                err_1 = _b.sent();
                console.log(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorization, id, products, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                authorization = req.headers.authorization;
                if (!authorization) {
                    return [2 /*return*/, res.status(401).json("Unauthorized")];
                }
                id = jsonwebtoken_1.default.verify(authorization, "secret-key").id;
                return [4 /*yield*/, product_model_1.ProductModel.find({ merchId: id })];
            case 1:
                products = _a.sent();
                res.json(products);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.log(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllProduct = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allProduct, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, product_model_1.ProductModel.find({})];
            case 1:
                allProduct = _a.sent();
                return [2 /*return*/, res.json(allProduct)];
            case 2:
                err_3 = _a.sent();
                console.log(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.editProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorization, _a, id, productName, additionInfo, barCode, productImage, mainPrice, quantity, mainCategory, secondCategory, color, size, tag, product, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                authorization = req.headers.authorization;
                if (!authorization) {
                    return [2 /*return*/, res.status(401).json({
                            message: "Unauthorized user",
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                _a = req.body, id = _a.id, productName = _a.productName, additionInfo = _a.additionInfo, barCode = _a.barCode, productImage = _a.productImage, mainPrice = _a.mainPrice, quantity = _a.quantity, mainCategory = _a.mainCategory, secondCategory = _a.secondCategory, color = _a.color, size = _a.size, tag = _a.tag;
                return [4 /*yield*/, product_model_1.ProductModel.findOne({ _id: id })];
            case 2:
                product = _b.sent();
                if (!product) {
                    return [2 /*return*/, res.json({
                            message: "Product does not exist",
                        })];
                }
                return [4 /*yield*/, product_model_1.ProductModel.updateOne({ _id: product._id }, {
                        $set: {
                            id: id,
                            productName: productName,
                            additionInfo: additionInfo,
                            barCode: barCode,
                            productImage: productImage,
                            mainPrice: mainPrice,
                            quantity: quantity,
                            mainCategory: mainCategory,
                            secondCategory: secondCategory,
                            color: color,
                            size: size,
                            tag: tag,
                        },
                    })];
            case 3:
                _b.sent();
                return [2 /*return*/, res.json({
                        message: "Бүтээгдэхүүн амжилттай шинэчлэгдлээ.",
                    })];
            case 4:
                error_1 = _b.sent();
                return [2 /*return*/, res.status(401).json({
                        message: "editProduct errors",
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorization, productId, id, productExist, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                authorization = req.headers.authorization;
                if (!authorization) {
                    return [2 /*return*/, res.status(401).json({
                            message: "newtersenii daraa delete hiinu",
                        })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                productId = req.body.productId;
                id = jsonwebtoken_1.default.verify(authorization, "secret-key").id;
                return [4 /*yield*/, product_model_1.ProductModel.findOne({
                        _id: productId,
                    })];
            case 2:
                productExist = _a.sent();
                if (!productExist) {
                    return [2 /*return*/, res.status(401).json({
                            message: "ss",
                        })];
                }
                return [4 /*yield*/, product_model_1.ProductModel.deleteOne({ _id: productId })];
            case 3:
                _a.sent();
                return [2 /*return*/, res.json({ message: "Бүтээгдхүүн устгагдлаа." })];
            case 4:
                err_4 = _a.sent();
                res.json(err_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.starReview = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, star, productId, product, count, avgStar, resultStar, err_5;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 3, , 4]);
                _a = req.body, star = _a.star, productId = _a.productId;
                return [4 /*yield*/, product_model_1.ProductModel.findOne({ _id: productId })];
            case 1:
                product = _d.sent();
                if (!product) {
                    return [2 /*return*/, res.status(401).json({
                            message: "Not found",
                        })];
                }
                count = Number((_b = product.starCount) !== null && _b !== void 0 ? _b : 0);
                avgStar = Number((_c = product.star) !== null && _c !== void 0 ? _c : 0);
                resultStar = (avgStar * count + star) / (count + 1);
                return [4 /*yield*/, product_model_1.ProductModel.updateOne({
                        _id: productId,
                    }, {
                        $set: {
                            starCount: count + 1,
                            star: resultStar,
                        },
                    })];
            case 2:
                _d.sent();
                return [2 /*return*/, res.json({ message: "Таны сэтгэгдлийг хүлээн авлаа." })];
            case 3:
                err_5 = _d.sent();
                console.log(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.soldQnty = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorization, _a, deliveryAdd, toCart, sumPaid, ids, sold, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                authorization = req.headers.authorization;
                if (!authorization) {
                    return [2 /*return*/, res.status(401).json({
                            message: "Unauthorized",
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                _a = req.body, deliveryAdd = _a.deliveryAdd, toCart = _a.toCart, sumPaid = _a.sumPaid;
                ids = toCart.find();
                // const soldQuantity = await ProductModel.find({ _id: 1 });
                return [2 /*return*/, res.json(toCart)];
            case 2:
                sold = _b.sent();
                return [2 /*return*/, res.json("Sold quantity")];
            case 3:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
