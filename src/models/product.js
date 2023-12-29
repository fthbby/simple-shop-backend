const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: false,
  },
  price: {
    type: Number,
    // required: true,
  },
  category: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    // required:true,
  },
  image: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "draft",
  },
});

module.exports = mongoose.model("Product", productSchema);
