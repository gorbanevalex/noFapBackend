import { Router } from "express";
import { login, register, update } from "../controllers/userController.js";
import { checkToken } from "../middleware/checkToken.js";

const route = Router();

route.post("/register", register);
route.post("/login", login);

route.patch("/user", checkToken, update);

export default route;
