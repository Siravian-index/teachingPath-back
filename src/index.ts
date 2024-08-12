
import 'dotenv/config'
import express from "express"
import { createServer } from './utils/server'

const PORT = process.env.PORT

async function main() {
  const app = createServer()
  app.use(express.json())
  // app.use(cors({
  //     origin: config.get("origin"),
  //     credentials: true,
  // }))

  // await connect()

  app.listen(PORT, async () => {
    console.log(`App is running at ${PORT}`)
  })
}

main()