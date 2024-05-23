import axios from "axios";

export const LoginUser = (userInfo: any) => axios.post("http://localhost:3001/user/login", userInfo)
export const signupUser = (userInfo: any) => axios.post("http://localhost:3001/user/signup", userInfo)

export const HelloTest = () => axios.get<any>("http://localhost:3001/hello")

// http://localhost:3001/hello