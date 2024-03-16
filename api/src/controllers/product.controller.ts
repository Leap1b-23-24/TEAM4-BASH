import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";

export const getAllProducts: RequestHandler = async (_req, res) => {
  const products = await ProductModel.find({});

  res.json(products);
};

export const postProduct: RequestHandler = async (req, res) => {
  const {
    productName,
    additionInfo,
    barCode,
    productImage,
    mainPrice,
    quantity,
    mainCategory,
    secondCategory,
    color,
    size,
    tag,
  } = req.body;

  const findProduct = await ProductModel.findOne({ productName });

  if (findProduct) {
    return res.status(401).json({
      message: "This product has been added",
    });
  }

  const product = await ProductModel.create({
    productName,
    additionInfo,
    barCode,
    productImage,
    mainPrice,
    quantity,
    mainCategory,
    secondCategory,
    color,
    size,
    tag,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return res.json({
    message: "Шинэ бүтээгдэхүүн үүслээ",
  });
};

export const getProduct: RequestHandler = async (_req, res) => {
  const product = await ProductModel.find({});

  return res.json(product);
};
