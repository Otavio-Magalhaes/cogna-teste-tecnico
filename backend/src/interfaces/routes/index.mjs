import Router from "express"
import produtosRotas from "./produtosRoutes.mjs"


const routes = Router()

routes.use(produtosRotas)


export default routes
