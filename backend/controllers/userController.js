import User from "../models/User.js";
import bcrypt from "bcrypt";

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  res.json({ msg: "user logged in" });
};

export const registerUser = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ ...req.body, password: hashedPassword });
    res.json({ msg: "user register success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "user registration failed" });
  }
};

export const logoutUser = (req, res) => {
  res.json({ msg: "user logged out" });
};
