import { Router } from "express";
import { getAllUser, getUser, login, signUp } from "../controllers";

const authRouter = Router();

authRouter
  .post("/sign", signUp)
  .post("/login", login)
  .get("/user", getUser)
  .get("/all", getAllUser);

export default authRouter;
