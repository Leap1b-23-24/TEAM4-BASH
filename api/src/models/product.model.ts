import { Schema, model } from "mongoose";

export const productSchema = new Schema({
  merchId: String,
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
});
export const ProductModel = model("product", productSchema);
