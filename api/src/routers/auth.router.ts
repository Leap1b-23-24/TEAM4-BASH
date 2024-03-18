import { Router } from "express";
import { login, signUp } from "../controllers";

const authRouter = Router();

authRouter.post("/sign", signUp).post("/login", login);

export default authRouter;
