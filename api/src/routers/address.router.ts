import { Router } from "express";
import { getAddress, postAddress } from "../controllers";

const addressRouter = Router();

addressRouter.post("/post", postAddress).get("/get", getAddress);

export default addressRouter;
