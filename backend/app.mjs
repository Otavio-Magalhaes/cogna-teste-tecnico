import express from "express"
import router from "./src/interfaces/routes/index.mjs"
import cookieParser from "cookie-parser"

const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(router)

app.get("/", (request, response)=>{
  response.send("Funcionando.")
})

export default app

