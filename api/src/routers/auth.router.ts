import { Router } from "express";
import { signUp } from "../controllers";

const authRouter = Router();

authRouter.post("/sign", signUp);

export default authRouter;
