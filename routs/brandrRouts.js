import express from "express";
import {create, getAll} from "../Controller/BrandController.js";
import cheakAuth from "../utils/cheakAuth.js";

const brandRouts = express.Router()

brandRouts.post("/brand/", cheakAuth, create)
brandRouts.get("/brand/", getAll)

export default brandRouts