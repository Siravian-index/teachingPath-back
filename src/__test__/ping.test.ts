import supertest from "supertest"
import { createServer } from "../utils/server"

const app = createServer()

describe("ping route", () => {

  it("returns pong", async () => {
    await supertest(app).get("/ping").expect(200)
  })
})