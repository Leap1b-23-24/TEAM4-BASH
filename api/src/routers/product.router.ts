import { Router } from "express";
import {
  deleteProduct,
  getAllProducts,
  getProduct,
  postProduct,
} from "../controllers/product.controller";
const productRouter = Router();

productRouter
  .get("/getAll", getAllProducts)
  .post("/add", postProduct)
  .get("/plus", getProduct)
  .post("/delete", deleteProduct);

export default productRouter;
