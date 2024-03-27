import mongoose, { Schema, model } from "mongoose";

export const commentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  productId: String,
  star: Number,
  comment: String,
  createdAt: Date,
  updatedAt: Date,
});

export const CommentModel = model("comment", commentSchema);
