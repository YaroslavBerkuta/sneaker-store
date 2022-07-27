import express from "express";
import {loginValidator, registerValidator} from "../validator/user.js";
import {create, login} from "../Controller/UserController.js";

const userRouts = express.Router()

userRouts.post("/user/register", registerValidator, create)
userRouts.post("/user/login", loginValidator, login)

export default userRouts