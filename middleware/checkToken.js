import jwt from "jsonwebtoken";

export const checkToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, "secret123");
      req.userId = decoded._id;
      next();
    } catch (error) {
      return res.status(400).json({
        msg: "Не верный токен",
      });
    }
  } else {
    return res.status(500).json({
      msg: "Не удалось идентифицировать токен",
    });
  }
};
