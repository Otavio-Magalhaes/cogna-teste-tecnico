import { Router } from "express";
import { handleRefreshToken, login, PegarUsuarioAtual } from "../controllers/authController.mjs";
import { authenticateToken } from "../../infrastructure/middlewares/authenticateToken.mjs";

const router = Router()


router.post("/api/auth/login", login)

router.post("/api/auth/refreshToken" ,handleRefreshToken)

router.get("/api/auth/me",authenticateToken ,PegarUsuarioAtual)

export default router;