import request from "supertest";
import app from "../../app";

describe("POST /auth/register", () => {
  describe("Given all fields", () => {
    it("should be return 201 status code", async () => {
      // Arrange
      const userData = {
        firstName: "Koushik",
        lastName: "Panda",
        email: "panda@gmail.com",
        password: "12345",
      };
      // Act
      const responce = await request(app).post("/auth/register").send(userData);

      // Assert
      expect(responce.statusCode).toBe(201);
    });
    it("should be return json responce", async () => {
      const userData = {
        firstName: "Koushik",
        lastName: "Panda",
        email: "panda@gmail.com",
        password: "12345",
      };
      const responce = await request(app).post("/auth/register").send(userData);
      expect(
        (responce.headers as Record<string, string>)["content-type"]
      ).toEqual(expect.stringContaining("json"));
    });
  });
  describe("Missing fields", () => {});
});
