import request from "supertest";
import calculateDiscount from "./src/util";
import app from "./src/app";

describe("App", () => {
  it("should be return correct discount", () => {
    const discount = calculateDiscount(100, 10);
    expect(discount).toBe(10);
  });

  it("should return correct status code", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
  });
});
