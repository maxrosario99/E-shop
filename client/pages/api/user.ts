import axios from "axios";

const UsersURL = "http://localhost:3001/user"

export const LoginUser = (userInfo: any) => axios.post( UsersURL +"/login", userInfo)
export const signupUser = (userInfo: any) => axios.post(UsersURL + "/signup", userInfo)

export const displayUser = () => axios.get(UsersURL +"/users")

export const deleteUser = (user: any) => axios.post(UsersURL + "/deleteUser", user)

// http://localhost:3001/hello