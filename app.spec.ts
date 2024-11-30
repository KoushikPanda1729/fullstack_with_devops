import request from "supertest";
import app from "./src/app";

describe.skip("App", () => {
  it("should return correct status code", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
  });
});
