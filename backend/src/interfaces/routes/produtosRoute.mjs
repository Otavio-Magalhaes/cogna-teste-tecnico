import { Router } from "express";
import { adicionarProtudo, pegarProdutoPorId, pegarTodosOsProdutos } from "../controllers/produtosController.mjs";
import { authenticateToken } from "../../infrastructure/middlewares/authenticateToken.mjs";
import { ProdutoPrismaRepository } from "../../infrastructure/database/prisma/ProdutoPrismaRepository.mjs";
import { validateProduto } from "../schemas/validationProdutoSchema.mjs";
import { schemaValidator } from "../../infrastructure/middlewares/schemaValidator.mjs";

const router = Router()
const produtoRepository = new ProdutoPrismaRepository()


router.get("/api/produtos", authenticateToken ,pegarTodosOsProdutos(produtoRepository))

router.get("/api/produtos/:id", authenticateToken,pegarProdutoPorId(produtoRepository))

router.post("/api/produtos",authenticateToken, ...schemaValidator(validateProduto) ,adicionarProtudo(produtoRepository))

export default router

 