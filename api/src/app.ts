import express from "express";
import cors from "cors";
import { json } from "body-parser";
import productRouter from "./routers/product.router";
import authRouter from "./routers/auth.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/product", productRouter);
app.use("/auth", authRouter);

export default app;
