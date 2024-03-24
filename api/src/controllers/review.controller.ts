import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ReviewModel } from "../models";

export const postReview: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const { start1, start2, start3, start4, start5, comment } = req.body;

    const review = await ReviewModel.create({
      // stars: {
      //   start1,
      //   start2,
      //   start3,
      //   start4,
      //   start5,
      // },
      comment,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.json({ message: "Accepted your rate" });
  } catch (error) {
    console.log(error);
  }
};

export const getReview: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const rate = await ReviewModel.find({});

    return res.json(rate);
  } catch (error) {
    console.log(error);
  }
};
