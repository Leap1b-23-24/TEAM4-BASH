import { RequestHandler } from "express";
import { CommentModel } from "../models";

export const postComment: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const { comment, productId, userId, star } = req.body;

    await CommentModel.create({
      comment,
      productId,
      userId,
      star,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.json({ message: "Таны сэтгэгдлийг хүлээн авлаа." });
  } catch (error) {
    console.log(error);
  }
};

export const getAllComment: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.body;

    const allComment = await CommentModel.find({
      productId,
    }).populate("userId");

    return res.json(allComment);
  } catch (err) {
    console.log(err);
  }
};
