export const loginUser = (req, res) => {
  const { email, password } = req.body;
  res.json({ msg: "user logged in" });
};

export const registerUser = (req, res) => {
  res.json({ msg: "user register success" });
};

export const logoutUser = (req, res) => {
  res.json({ msg: "user logged out" });
};
