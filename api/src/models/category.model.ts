import { Schema, model } from "mongoose";

export const categorySchema = new Schema({
  category: {
    type: String,
    require: false,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const CategoryModel = model("category", categorySchema);
