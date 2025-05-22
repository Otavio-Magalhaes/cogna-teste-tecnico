import express from "express"
import routes from "./src/interfaces/routes/index.mjs"

const app = express()


app.use(express.json())
app.use(routes)

app.get("/", (request, response)=>{
  response.send("Funcionando.")
})

export default app

