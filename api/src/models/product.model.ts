import { Schema, model } from "mongoose";

export const productSchema = new Schema({
  productName: {
    type: String,
    require: true,
  },
  additionInfo: {
    type: String,
    require: true,
  },
  barCode: {
    type: Number,
    require: true,
  },
  productImage: {
    type: String,
    require: false,
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
    type: String,
    require: false,
  },
  size: {
    type: String,
    require: false,
  },
  tag: {
    type: String,
    require: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const ProductModel = model("product", productSchema);
