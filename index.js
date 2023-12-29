
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); 


const server = app.listen(process.env.PORT, () => {
  console.log(`server started on port: ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
