import { Router } from "express";
import { pegarProdutoPorId, pegarTodosOsProdutos } from "../controllers/produtosController.mjs";
import { authenticateToken } from "../../infrastructure/middlewares/authenticateToken.mjs";
import { ProdutoPrismaRepository } from "../../infrastructure/database/prisma/ProdutoPrismaRepository.mjs";

const router = Router()
const produtoRepository = new ProdutoPrismaRepository()


router.get("/api/produtos", authenticateToken ,pegarTodosOsProdutos(produtoRepository))

router.get("/api/produtos/:id", authenticateToken,pegarProdutoPorId(produtoRepository))

export default router

 