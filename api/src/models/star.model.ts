import { Schema, model } from "mongoose";

export const starSchema = new Schema({
  userId: String,
  productId: String,
  stars: {
    star1: Number,
    star2: Number,
    star3: Number,
    star4: Number,
    star5: Number,
  },
  createdAt: Date,
});

export const StarModel = model("star", starSchema);
