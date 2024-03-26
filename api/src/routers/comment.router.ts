import { Router } from "express";
import { getAllComment, getComment, postComment } from "../controllers";

const commentRouter = Router();

commentRouter
  .post("/rate", postComment)
  .get("/get", getComment)
  .post("/all", getAllComment);

export default commentRouter;