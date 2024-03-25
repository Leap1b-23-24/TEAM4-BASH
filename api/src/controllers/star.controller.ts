import { RequestHandler } from "express";
import { StarModel } from "../models";

export const starReview: RequestHandler = async (req, res) => {
  try {
    const { star1, star2, star3, star4, star5 } = req.body;

    const star = await StarModel.create({
      stars: {
        star1,
        star2,
        star3,
        star4,
        star5,
      },
    });

    return res.json({ message: "Accept your rate" });
  } catch (err) {
    console.log(err);
  }
};

export const getStar: RequestHandler = async (req, res) => {
  try {
    const findReview = await StarModel.findById({});

    return res.json(findReview);
  } catch (err) {
    console.log(err);
  }
};
