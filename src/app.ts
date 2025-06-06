import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";
import authRoute from "./routes/authRoute";

const app = express();
app.use(express.json({ limit: "20kb" }));

app.get("/", (req, res) => {
  res.status(200).json({
    learning: "wellcome to advance full stack journey",
  });
});

app.use("/auth", authRoute);
// global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(err.statusCode).json({
    type: err.name,
    message: err.message,
    location: "",
    path: "",
  });
});
export default app;
