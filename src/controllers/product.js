const Product = require("../models/product");

const createProduct = async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) return res.json({ msg: "missing title" });

    const product = await Product.create({
      title,
    });

    if (product) {
      return res.json({ success: true, msg: "Product created", product });
    }

    return res.json({ msg: "failed to create product" });
  } catch (err) {
    next(err);
    console.log("err :", err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const data = await Product.find({});

    if (data) {
      return res.json({ success: true, data });
    }

    return res.json({ success: false, msg: "failed to get all product" });
  } catch (err) {
    console.log("err:", err);
  }
};

module.exports = { createProduct, getAll };