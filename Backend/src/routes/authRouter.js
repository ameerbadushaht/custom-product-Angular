import {Router} from "express";
import { signup, login, getProfile } from "../controllers/authController.js";
// import { verifyToken } from "../controllers/AuthController.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
// router.get("/profile", verifyToken, getProfile);

export default router;
