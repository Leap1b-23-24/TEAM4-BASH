import { RequestHandler } from "express";
import { AddressModel } from "../models/address.model";
import jwt, { JwtPayload } from "jsonwebtoken";

export const postAddress: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const { deliveryAdd, toCart, sumPaid } = req.body;

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    await AddressModel.create({
      deliveryAdd,
      toCart,
      sumPaid,
      userId: id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.json({
      message: "Таны захиалга амжилттай захиалагдлаа.",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAddress: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const address = await AddressModel.find({
      toCart: { $elemMatch: { "sel.merchId": id } },
    });

    return res.json(address);
  } catch (err) {
    console.log(err);
  }
};
