import User from "../models/User.js";

export const getUserProfile = async (req, res) => {
  const userId = req.user.id;
  const profile = await User.findById(userId, "name email isAdmin");
  res.status(200).json(profile);
};

export const updateUserProfile = async (req, res) => {
  res.json({ msg: "profile updated successfully!" });
};
