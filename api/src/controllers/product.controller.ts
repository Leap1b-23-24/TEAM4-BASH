import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getProduct: RequestHandler = async (_req, res) => {
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

export const editProduct: RequestHandler = async (req, res) => {
  // const { authorization } = req.headers;

  // if (!authorization) {
  //   return res.status(401).json({
  //     message: "Unauthorized user",
  //   });
  // }
  try {
    const {
      id,
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

    const product = await ProductModel.findOne({ _id: id });

    if (!product) {
      return res.json({
        message: "Product does not exist",
      });
    }

    await ProductModel.updateOne(
      { _id: product._id },
      {
        $set: {
          id,
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
        },
      }
    );
    return res.json({
      message: "Product successfully edited",
    });
  } catch (error) {
    return res.status(401).json({
      message: "editProduct errors",
    });
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    // const { authorization } = req.headers;

    // if (!authorization) {
    //   return res.status(401).json({
    //     message: "user",
    //   });
    // }
    // const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const { productId } = req.body;

    const productExist = await ProductModel.findOne({ _id: productId });

    if (!productExist) {
      return res.status(401).json({
        message: "ss",
      });
    }

    const product = await ProductModel.findByIdAndDelete(productId);

    return res.json({ message: "Product deleted" });
  } catch (err) {
    res.json(err);
  }
};
