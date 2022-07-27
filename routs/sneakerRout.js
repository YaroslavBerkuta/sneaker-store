import express from "express";
import cheakAuth from "../utils/cheakAuth.js";
import {create} from "../Controller/SneakerController.js";

const sneakerRouts = express.Router()
sneakerRouts.post("/sneaker/", cheakAuth, create)


export default sneakerRouts