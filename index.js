require("dotenv").config();
const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());

app.use(bodyParser.json());
const mongoose = require("mongoose");
const productRoutes = require("./src/routes/product");
const authRoutes = require('./src/routes/auth')


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


app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);
