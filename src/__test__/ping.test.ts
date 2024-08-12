import supertest from "supertest"
import { createServer } from "../utils/server"

const app = createServer()

describe("ping route", () => {

  it("returns pong", async () => {
    const { statusCode, text } = await supertest(app).get("/ping")
    expect(statusCode).toBe(200)
    expect(text).toBe("pong")
  })
})