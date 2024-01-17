const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const setupRouter = require("./routes/auth");
const todoRouter = require("./routes/todo");
//Standard middlewares
app.use(express.json());
app.use(cors());
//Routes
app.use("/auth", setupRouter);
app.use("/todo", todoRouter);
//Global error catch
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something's up with the server" });
});
//Listening for requests
app.listen(process.env.port, () => {
  console.log(`System's up and running @${process.env.port}!`);
});
