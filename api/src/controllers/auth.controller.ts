import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email, password: password });

    if (!user) {
      return res.status(401).json({
        message: "Ийм нэртэй хэрэглэгч олдсонгүй.",
      });
    }

    const id = user._id;

    const token = jwt.sign({ id }, "secret-key");

    res.json({
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

export const signUp: RequestHandler = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(401).json({
        message: "Ийм нэртэй хэрэглэгч бүртгэгдсэн байна.",
      });
    }

    await UserModel.create({
      email,
      name,
      password,
    });

    return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ." });
  } catch (error) {
    console.log(error);
  }
};

export const getUser: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const user = await UserModel.findOne({ _id: id });

    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

export const getAllUser: RequestHandler = async (req, res) => {
  try {
    const allUser = await UserModel.find({});

    return res.json(allUser);
  } catch (err) {
    console.log(err);
  }
};
