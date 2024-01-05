const express = require("express");
const app = express();
const cors = require("cors");
const setupRouter = require("./routes/setup");
const todoRouter = require("./routes/todo");
const { port } = require("../config");
//Standard middlewares
app.use(express.json());
app.use(cors());
//Routes
app.use("/setup", setupRouter);
app.use("/todo", todoRouter);
//Global error catch
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something's up with the server" });
});
//Listening for requests
app.listen(port, () => {
  console.log(`System's up and running @${port}!`);
});
