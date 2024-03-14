import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  postProduct,
} from "../controllers/product.controller";
const productRouter = Router();

productRouter
  .get("/getAll", getAllProducts)
  .post("/add", postProduct)
  .get("/plus", getProduct);

export default productRouter;
