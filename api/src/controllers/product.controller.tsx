import { RequestHandler } from "express";

export const getSelectedProduct: RequestHandler = async (req, res) => {
  try {
  } catch (error) {
    return res.status(401).json({
      message: "getSelectedProduct errors",
    });
  }
};
