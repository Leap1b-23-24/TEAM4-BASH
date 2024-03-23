import { Router } from "express";
import { getCategory, postCategory } from "../controllers";

const categoryRouter = Router();

categoryRouter.post("add", postCategory).get("get", getCategory);

export default categoryRouter;
