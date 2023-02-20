const express = require("express");
const jokesRouter = require("./routes/jokes");
const jokesController = require("./controllers/jokes");

const app = express();

app.use(express.json())
app.use("/jokes", jokesRouter);

app.get("/randomJoke", jokesController.getRandom);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

module.exports = app;
