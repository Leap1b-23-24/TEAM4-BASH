import { Schema, model } from "mongoose";

export const categorySchema = new Schema({
  category: {
    type: String,
    require: false,
  },
  createdAt: {
    type: Date,
    require: true,
  },
  updatedAt: {
    type: Date,
    require: true,
  },
});

export const CategoryModel = model("category", categorySchema);
