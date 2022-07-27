import express from "express"
import mongoose from "mongoose";
import {Port, dbURL} from "./env.js";
import userRouts from "./routs/userRouts.js"
import brandRouts from "./routs/brandrRouts.js";
import sneakerRouts from "./routs/sneakerRout.js";

const app = express()
app.use(express.json())


app.get("/",(req, res) => {
    res.send("hello")
})


app.use(userRouts)
app.use(brandRouts)
app.use(sneakerRouts)

async function start() {
    try {
        await mongoose.connect(dbURL)
        app.listen(Port, () => {
            console.log(`server start:http://localhost:${Port}`)
        })
    } catch (e) {
        console.log(e)
    }
}


start()
