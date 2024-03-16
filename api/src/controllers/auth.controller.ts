import { RequestHandler } from "express";
import { UserModel } from "../models";

export const signUp: RequestHandler = async (req, res) => {
  const { email, name } = req.body;

  const user = await UserModel.findOne({ email });

  if (user) {
    return res.status(401).json({
      message: "User exist",
    });
  }

  const newUser = await UserModel.create({
    email,
    name,
  });

  return res.json({ message: "New user successfully created" });
};
