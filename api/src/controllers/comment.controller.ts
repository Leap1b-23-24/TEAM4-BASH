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
    const { comment, productId, userId } = req.body;

    await CommentModel.create({
      comment,
      productId,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.json({ message: "Accepted your rate" });
  } catch (error) {
    console.log(error);
  }
};

export const getComment: RequestHandler = async (req, res) => {
  try {
    const rate = await CommentModel.find({});

    return res.json(rate);
  } catch (error) {
    console.log(error);
  }
};

export const getAllComment: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.body;

    // return res.json(productId);
    const allComment = await CommentModel.find({
      productId,
    }).populate("userId");

    return res.json({ allComment, message: "comments sent" });
  } catch (err) {
    console.log(err);
  }
};