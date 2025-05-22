import { Router } from "express";
import { PegarProdutoPorId, PegarTodosOsProdutos } from "../controllers/produtosController.mjs";

const router = Router()


router.get("/api/produtos", PegarTodosOsProdutos)

router.get("/api/produtos/:id", PegarProdutoPorId)

export default router

