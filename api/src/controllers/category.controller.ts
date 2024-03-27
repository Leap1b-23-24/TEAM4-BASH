import { RequestHandler } from "express";
import { CategoryModel } from "../models";

export const postCategory: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const { category } = req.body;

    const findCategory = await CategoryModel.findOne({ category });

    if (findCategory) {
      return res.status(401).json({
        message: "Category has been added",
      });
    }

    await CategoryModel.create({
      category,
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ ангилал амжилттай үүслээ." });
  } catch (err) {
    console.log(err);
  }
};

export const getCategory: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const findCategory = await CategoryModel.find({});

    return res.json(findCategory);
  } catch (err) {
    console.log(err);
  }
};
