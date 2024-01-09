const User = require("../models/user");

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ msg: "missing ID" + id });
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

const uploadAvatar = async (req, res, next) => {
  try {
    const { base64, id } = req.body;
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.json({ msg: "no user found" });
    }

    const userId = user._id;
    const image = base64;
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarSet: true,
      image,
    });

    return res.json({
      success: true,
      isAvatarSet: true,
      image,
      data: userData,
    });
  } catch (err) {
    res.send({ Status: "error setting avatar", err });
  }
};

const deleteAvatar = async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log("req.body:", req.body);

    if (!id) {
        return res.json({msg:'no id'})
    }
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.json({ msg: "no user found" + req.body});
    }

    const userId = user._id
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarSet: false,
      image: null,
    });

    return res.json({
      success: true,
      isAvatarSet: false,
      image: userData.image,
      data: userData,
    });
  } catch (err) {}
};

module.exports = { getAll, getUserById, uploadAvatar, deleteAvatar };
