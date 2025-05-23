import { Router } from "express";
import { PegarProdutoPorId, PegarTodosOsProdutos } from "../controllers/produtosController.mjs";
import { authenticateToken } from "../../infrastructure/middlewares/authenticateToken.mjs";

const router = Router()


router.get("/api/produtos", authenticateToken ,PegarTodosOsProdutos)

router.get("/api/produtos/:id", authenticateToken,PegarProdutoPorId)

export default router

