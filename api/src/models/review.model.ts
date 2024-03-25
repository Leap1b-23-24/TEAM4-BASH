import { Schema, model } from "mongoose";

export const reviewSchema = new Schema({
  merchId: String,
  productId: String,
  stars: {
    start1: Number,
    start2: Number,
    start3: Number,
    start4: Number,
    start5: Number,
  },
  comment: String,
  createdAt: Date,
  updatedAt: Date,
});

export const ReviewModel = model("review", reviewSchema);
