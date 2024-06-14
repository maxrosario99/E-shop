import express from "express";
import {
  AddNewProduct,
  GetProducts,
  UpdateProduct,
  deleteProduct,
} from "../controllers/products.js";
const router = express.Router();

router.get("/getProducts", GetProducts);

router.post("/AddNewProduct", AddNewProduct);
router.put("/UpdateProduct", UpdateProduct);
router.delete("/deleteProduct", deleteProduct);
export default router;
