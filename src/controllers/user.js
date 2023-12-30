const User = require("../models/user");

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ msg: "missing ID" + id});
    }

    const data = await User.findOne({ _id: id });

    if (data) {
      return res.json({ success: true, data });
    }

    return res.json({ success: false, msg: "can't pull user" });
  } catch (err) {}
};

 const getAll = async (req, res, next) => {
  try {
    const data = await User.find({});
    if (data) {
      return res.json({ success: true, data });
    }

    return res.json({ success: false, msg: "cant pull all users" });
  } catch (err) {}
};


module.exports = {getAll, getUserById}