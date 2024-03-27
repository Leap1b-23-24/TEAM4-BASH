import { Router } from "express";
import { getAllComment, postComment } from "../controllers";

const commentRouter = Router();

commentRouter.post("/rate", postComment).post("/all", getAllComment);

export default commentRouter;
