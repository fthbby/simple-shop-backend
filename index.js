require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const mongoose = require("mongoose");

const server = app.listen(process.env.PORT, () => {
  console.log(`server started on port: ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successful!");
  })
  .catch((err) => {
    console.log("DB not connected", err.message);
  });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
