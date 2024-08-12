
import 'dotenv/config'
import express from "express"

const PORT = process.env.PORT

async function main() {
  const app = express()
  app.use(express.json())
  // app.use(cors({
  //     origin: config.get("origin"),
  //     credentials: true,
  // }))

  // routes(app)

  // await connect()
  

  app.listen(PORT, async () => {
    console.log(`App is running at ${PORT}`)
  })
}

main()