import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";
import jwt, { JwtPayload } from "jsonwebtoken";

export const postProduct: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Burtgelgui hereglegch bna",
      });
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

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

    await ProductModel.create({
      merchId: id,
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
  } catch (err) {
    console.log(err);
  }
};

export const getProduct: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json("Unauthorized");
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const products = await ProductModel.find({ merchId: id });

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

export const getAllProduct: RequestHandler = async (_req, res) => {
  try {
    const allProduct = await ProductModel.find({});

    return res.json(allProduct);
  } catch (err) {
    console.log(err);
  }
};

export const editProduct: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized user",
    });
  }

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
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "newtersenii daraa delete hiinu",
    });
  }

  try {
    const { productId } = req.body;

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const productExist = await ProductModel.findOne({
      _id: productId,
      // merchId: id,
    });

    if (!productExist) {
      return res.status(401).json({
        message: "ss",
      });
    }

    await ProductModel.deleteOne({ _id: productId });

    return res.json({ message: "Product deleted" });
  } catch (err) {
    res.json(err);
  }
};

export const starReview: RequestHandler = async (req, res) => {
  try {
    const { star, productId } = req.body;

    const product = await ProductModel.findOne({ _id: productId });

    if (!product) {
      return res.status(401).json({
        message: "Not found",
      });
    }

    const count = Number(product.starCount ?? 0);
    const avgStar = Number(product.star ?? 0);

    const resultStar = (avgStar * count + star) / (count + 1);

    await ProductModel.updateOne(
      {
        _id: productId,
      },
      {
        $set: {
          starCount: count + 1,
          star: resultStar,
        },
      }
    );

    return res.json({ message: "Accept your rate" });
  } catch (err) {
    console.log(err);
  }
};
