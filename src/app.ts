import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({
    name: "Koushik",
    dept: "MCA",
  });
});
export default app;
