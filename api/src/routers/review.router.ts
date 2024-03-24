import { Router } from "express";
import { getReview, postReview } from "../controllers";

const reviewRouter = Router();

reviewRouter.post("/rate", postReview).get("/get", getReview);

export default reviewRouter;
