import { Router } from "express";
import {
  deleteProduct,
  editProduct,
  getAllProduct,
  getProduct,
  postProduct,
  starReview,
} from "../controllers/product.controller";
const productRouter = Router();

productRouter
  .post("/add", postProduct)
  .get("/plus", getProduct)
  .post("/delete", deleteProduct)
  .post("/editProduct", editProduct)
  .get("/allPro", getAllProduct)
  .post("/star", starReview);

export default productRouter;
