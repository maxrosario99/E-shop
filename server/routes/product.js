import express from "express"
import { GetProducts, UpdateProductName } from "../controllers/products.js";
const router = express.Router();

router.get('/getProducts', GetProducts)
router.post('/updateProductName', UpdateProductName)

export default router