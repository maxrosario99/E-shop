import express from "express";
import {
  AddNewProduct,
  GetProducts,
  UpdateProduct,
} from "../controllers/products.js";
const router = express.Router();

router.get("/getProducts", GetProducts);

router.post("/AddNewProduct", AddNewProduct);
router.put("/UpdateProduct", UpdateProduct);
export default router;
