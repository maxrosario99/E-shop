
import express from "express"
import { LoginUser, signupUser } from "../controllers/user.js";
const router = express.Router();

router.post("/login", LoginUser)
router.post("/signup", signupUser)


export default router