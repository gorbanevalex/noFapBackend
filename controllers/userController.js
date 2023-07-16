import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const checkedLogin = await userModel.findOne({
    login: req.body.login,
  });
  if (checkedLogin) {
    return res.status(400).json({
      type: "login",
      msg: "Этот логин уже зарегестрирован",
    });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password.toString(), salt);
    const doc = await new userModel({
      ...req.body,
      password: hashPassword,
    });
    const user = await doc.save();
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Какая то ошибочка на сервере, попробуйте еще раз",
    });
  }
};