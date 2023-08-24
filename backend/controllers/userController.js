import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (!userDoc || !(await userDoc.matchPassword(password)))
      return res.status(401).json({ msg: "invalid email or password" });
    const token = jwt.sign(
      { userId: userDoc._id, name: userDoc.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, //60 minutes
    });
    return res.json({
      email: userDoc.email,
      name: userDoc.name,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error while logging-In user" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "user already registered" });
    }
    await User.create(req.body);
    res.status(201).json({ msg: "user register success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "user registration failed" });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return res.json({ msg: "logout successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "user logout failed" });
  }
};
