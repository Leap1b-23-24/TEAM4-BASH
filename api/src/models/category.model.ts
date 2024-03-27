import { Schema, model } from "mongoose";

export const categorySchema = new Schema({
  category: {
    type: String,
    require: true,
  },
  createdAt: Date,
  updatedAt: Date,
});

export const CategoryModel = model("category", categorySchema);
