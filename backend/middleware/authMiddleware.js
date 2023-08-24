import jwt from "jsonwebtoken";

export async function isAuthenticatedUser(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized user" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decodedToken.userId };
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Unauthorized user" });
  }

  next();
}

export async function isAdminUser(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized user" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken.isAdmin) {
      return req(401).json({ msg: "Unauthorized user" });
    }
    req.user = { id: decodedToken.userId };
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Unauthorized user" });
  }

  next();
}
