import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";

export const editProduct: RequestHandler = async (req, res) => {
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
  } catch (error) {
    return res.status(401).json({
      message: "editProduct errors",
    });
  }
};
