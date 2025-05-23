import { Router } from "express";
import { handleRefreshToken, login } from "../controllers/authController.mjs";

const router = Router()


router.post("/api/auth/login", login)

router.post("/api/auth/refreshToken" ,handleRefreshToken)



export default router;