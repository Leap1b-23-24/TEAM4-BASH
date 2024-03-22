import { Router } from "express";
import {
  deleteProduct,
  editProduct,
  getProduct,
  postProduct,
} from "../controllers/product.controller";
const productRouter = Router();

productRouter
  .post("/add", postProduct)
  .get("/plus", getProduct)
  .post("/delete", deleteProduct)
  .post("/editProduct", editProduct);

export default productRouter;
