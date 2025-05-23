import Router from "express"
import produtosRotas from "./produtosRoute.mjs"
import userRoutes from "./usersRoute.mjs"
import authRoutes from "./authRoute.mjs"

const router = Router()

router.use(produtosRotas)
router.use(userRoutes)
router.use(authRoutes)

export default router
