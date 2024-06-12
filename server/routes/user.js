import express from "express";
import {
  LoginUser,
  deleteUser,
  displayUsers,
  signupUser,
} from "../controllers/user.js";
const router = express.Router();

router.post("/login", LoginUser);
router.post("/signup", signupUser);
router.get("/users", displayUsers);
router.post("/deleteUser", deleteUser);

export default router;
