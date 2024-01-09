require("dotenv").config();
const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json({limit: '50mb'}));
// app.use(express.json());

// app.use(bodyParser.json({ limit: "10mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.use(cors());

const mongoose = require("mongoose");
const productRoutes = require("./src/routes/product");
const authRoutes = require('./src/routes/auth')
const userRoutes = require('./src/routes/user')

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
app.use("/api/user", userRoutes);
