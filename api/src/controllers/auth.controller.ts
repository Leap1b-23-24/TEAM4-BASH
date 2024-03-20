import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email, password: password });

  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  const id = user._id;

  const token = jwt.sign({ id }, "secret-key");

  res.json({
    token,
  });
};

export const signUp: RequestHandler = async (req, res) => {
  const { email, name, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user) {
    return res.status(401).json({
      message: "User exist",
    });
  }

  const newUser = await UserModel.create({
    email,
    name,
    password,
  });

  return res.json({ message: "New user successfully created" });
};
