const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

/* Register a new user */
const signUp = async (data) => {
  try {
    const existingUser = await User.findOne({ where: { email: data.email } });
    if (existingUser) {
      throw new Error("Email is already present!");
    }
    const encryptedPassword = await bcrypt.hash(data.password, 10);
    const userData = await User.create({
      email: data.email,
      fullName: data.fullName,
      password: encryptedPassword,
    });
    userData.password = undefined;

    return userData;
  } catch (err) {
    throw new Error(err.message);
  }
};

/* Login user to te Homepage */
const logIn = async (data) => {
  try {
    const existingUser = await User.findOne({ where: { email: data.email } });
    if (!existingUser) {
      throw new Error("User not found!");
    }

    const isMatch = await bcrypt.compare(data.password, existingUser.password);
    if (isMatch) {
      const token = jwt.sign(
        { email: existingUser.email, fullName: existingUser.fullName },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
      return token;
    } else {
      throw new Error("Invalid credentials!");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { signUp, logIn };
