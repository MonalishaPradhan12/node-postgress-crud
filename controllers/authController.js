const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = require("../models/authModel");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //HASH PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);
    //SAVE USER

    const user = await authModel.createUser(name, email, hashedPassword);

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user =await authModel.findUserByMail(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    //CHECK PASSWORD

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        message: "Invalid password",
      });
    }

    //GENERATE TOKEN

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.json({
      message: "Login Successful",
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  signUp,
  login,
};
