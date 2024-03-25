import { Router } from "express";
import { getStar, starReview } from "../controllers";

const starRouter = Router();

starRouter.post("post", starReview).get("star", getStar);

export default starRouter;
