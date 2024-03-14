import { Schema } from "mongoose";

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
    require: true,
  },
  mainPrice: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
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
});
