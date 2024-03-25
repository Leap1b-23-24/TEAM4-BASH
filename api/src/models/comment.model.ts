import { Schema, model } from "mongoose";

export const commentSchema = new Schema({
  userId: String,
  productId: String,
  comment: String,
  createdAt: Date,
  updatedAt: Date,
});

export const CommentModel = model("comment", commentSchema);
