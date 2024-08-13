
import express from "express"
import routes from "../routes/router"

export  function createServer() {
  const app = express()
  app.use(express.json())
  
  app.get("/ping", (_, res) => {
    res.status(200).send("pong")
  })

  routes(app)

  return app
}
