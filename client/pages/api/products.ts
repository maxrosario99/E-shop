import { NewProduct, Product, UpdateProduct } from "@/models/products";
import axios from "axios";
import "./axiosIntercepter"
const productsUrl = "http://localhost:3001/products"

export const UpdateProductName = (updateProductInfo: any) => axios.post(productsUrl + "/updateProductName", updateProductInfo)

export const UpdateProductPrice = (updateProductInfo: any) => axios.post(productsUrl + "/UpdateProductPrice", updateProductInfo)

export const GetProducts = () => axios.get<Product[]>(productsUrl + "/getProducts")

export const AddNewProduct = (newProduct: NewProduct) => axios.post(productsUrl + "/AddNewProduct", newProduct )

export const UpdateItem = (UpdateProduct: UpdateProduct) => axios.put(productsUrl + "/UpdateProduct", UpdateProduct)

export const DeleteProduct = (DeleteProducts: any) => axios.delete(productsUrl + "/deleteProduct", DeleteProducts)
// export const LoginUser = (userInfo: any) => axios.post("http://localhost:3001/user/login", userInfo)
// export const signupUser = (userInfo: any) => axios.post("http://localhost:3001/user/signup", userInfo)