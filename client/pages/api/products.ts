import axios from "axios";

const productsUrl = "http://localhost:3001/products"

export const UpdateProductName = (updateProductInfo: any) => axios.post(productsUrl + "/updateProductName", updateProductInfo)

// export const LoginUser = (userInfo: any) => axios.post("http://localhost:3001/user/login", userInfo)
// export const signupUser = (userInfo: any) => axios.post("http://localhost:3001/user/signup", userInfo)