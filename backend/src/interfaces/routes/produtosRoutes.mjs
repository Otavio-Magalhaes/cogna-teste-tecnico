import { Router } from "express";
import { PegarTodosOsProdutos } from "../controllers/produtosController.mjs";

const router = Router()


router.get("/api/produtos", PegarTodosOsProdutos)



export default router

