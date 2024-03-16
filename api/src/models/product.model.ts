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
    type: String,
    require: true,
  },
  productImage: {
    type: String,
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
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    require: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const ProductModel = model("product", productSchema);
