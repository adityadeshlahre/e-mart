import express from "express";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.get("/pin", (req, res) => {
  console.log("Hello world");
  return;
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
