import { Router } from "express";
import { getUser, login, signUp } from "../controllers";

const authRouter = Router();

authRouter.post("/sign", signUp).post("/login", login).get("/user", getUser);

export default authRouter;
