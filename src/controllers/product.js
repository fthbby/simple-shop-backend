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

const update = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.json({ msg: "MISSING ID" });
    }
    const data = await Product.findOne({ _id: req.body.id });

    if (!data) {
      return res.json({ success: false, msg: "no product found" });
    }

    const updatedData = await Product.findByIdAndUpdate(req.body.id, req.body);

    return res.json({
      success: true,
      updatedData,
    });
  } catch (err) {}
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ msg: "NO ID TO DELETE" + id });
    }

    const data = await Product.findOne({ _id: id });

    if (!data)
      return res.json({ msg: "Couldnt find product with matching ID" + id });

    const deleted = await Product.findOneAndDelete({ _id: id });

    return res.json({
      success: true,
      deleted,
    });
  } catch (err) {
    console.log("err:", err);
  }
};

module.exports = { createProduct, getAll, update, destroy };
