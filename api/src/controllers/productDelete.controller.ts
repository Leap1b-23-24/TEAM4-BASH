import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";
import jwt from "jsonwebtoken";

export const productDlete: RequestHandler = async (req, res) => {
  const {
    productName,
    additionInfo,
    barCode,
    productImage,
    mainPrice,
    quantity,
  } = req.body;

  const product = await ProductModel.create({
    productName,
    additionInfo,
    barCode,
    productImage,
    mainPrice,
    quantity,
  });
  // if(product.productName ){
  //   return(

  //   );
  // }
};
