import Router from "express"
import produtosRotas from "./produtosRoute.mjs"
import userRoutes from "./usersRoute.mjs"

const routes = Router()

routes.use(produtosRotas)
routes.use(userRoutes)

export default routes
