import express from "express";
import {
  LoginUser,
  checkSession,
  deleteUser,
  displayUsers,
  signupUser,
} from "../controllers/user.js";
const router = express.Router();

router.post("/login", LoginUser);
router.post("/signup", signupUser);
router.get("/users", displayUsers);
router.post("/deleteUser", deleteUser);

router.get("/checkSession", checkSession);

export default router;
