"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModel = exports.addressSchema = void 0;
var mongoose_1 = __importStar(require("mongoose"));
exports.addressSchema = new mongoose_1.Schema({
    deliveryAdd: {
        email: {
            type: String,
            require: false,
        },
        firstName: {
            type: String,
            require: false,
        },
        lastName: {
            type: String,
            require: false,
        },
        address: {
            type: String,
            require: false,
        },
        city: {
            type: String,
            require: false,
        },
        info: {
            type: String,
            require: false,
        },
    },
    toCart: [
        {
            sel: {
                merchId: mongoose_1.default.Schema.Types.ObjectId,
                _id: mongoose_1.default.Schema.Types.ObjectId,
                star: {
                    type: Number,
                    require: false,
                },
                starCount: {
                    type: Number,
                    require: true,
                    default: 0,
                },
                productName: {
                    type: String,
                    require: true,
                },
                additionInfo: {
                    type: String,
                    require: true,
                },
                barCode: {
                    type: String,
                    require: true,
                },
                productImage: {
                    type: Array,
                    require: true,
                },
                mainPrice: {
                    type: Number,
                    require: true,
                },
                quantity: {
                    type: Number,
                    require: true,
                },
                mainCategory: {
                    type: String,
                    require: true,
                },
                secondCategory: {
                    type: String,
                    require: true,
                },
                color: {
                    type: Array,
                    require: true,
                },
                size: {
                    type: Array,
                    require: true,
                },
                tag: {
                    type: Array,
                    require: true,
                },
                productReactionCount: {
                    type: Number,
                    require: false,
                },
                productSoldQnty: {
                    type: Number,
                    require: false,
                },
                salePercent: {
                    type: Number,
                    require: false,
                },
                createdAt: Date,
                updatedAt: Date,
            },
            count: {
                type: Number,
                require: true,
            },
        },
    ],
    userId: mongoose_1.default.Schema.Types.ObjectId,
    sumPaid: {
        type: Number,
        require: true,
    },
    createdAt: Date,
    updatedAt: Date,
});
exports.AddressModel = mongoose_1.model("address", exports.addressSchema);
