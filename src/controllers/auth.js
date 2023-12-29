const User = require("../models/user");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const emailCheck = await User.findOne({ email });

    if (emailCheck) {
      return res.json({ msg: "email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    delete newUser.password;

    return res.json({ success: true, data: newUser });
  } catch (err) {
    console.log("err:", err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ msg: "no user found with this email" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.json({ msg: "password incorrect" });
    }

    delete user.password;

    return res.json({ success: true, data: user });
  } catch (err) {
    console.log("err:", err);
    next();
  }
};

module.exports = { register, login };
