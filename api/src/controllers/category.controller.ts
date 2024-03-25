import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CategoryModel } from "../models";

export const postCategory: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = jwt.verify(authorization, "secret") as JwtPayload;

    const { category } = req.body;

    const findCategory = await CategoryModel.findOne({ category });

    if (findCategory) {
      return res.status(401).json({
        message: "Category has been added",
      });
    }

    const createCat = await CategoryModel.create({
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.json({ message: "Шинэ ангилал амжилттай үүслээ." });
  } catch (err) {
    console.log(err);
  }
};

export const getCategory: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = jwt.verify(authorization, "secret") as JwtPayload;

    const findCategory = await CategoryModel.find({});

    return res.json(findCategory);
  } catch (err) {
    console.log(err);
  }
};
