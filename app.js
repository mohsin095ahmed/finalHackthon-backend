import express from "express";
import mongoose from "./control/sevices/db/index.js";
import route from "./route/index.js";
import cors from "cors"
import 'dotenv/config';
const PORT = process.env.PORT || 4000

const app =express();
app.use(cors());
app.use(express.json());
//CONECTION ON MONGODB

const db = mongoose.connection;
app.use(express.json());
db.on("error", console.error.bind(console, "conection err:"));
db.once("open", ()=>{
    console.log("data base conected");
});


app.use("/api", route);

app.use("/", (req,res)=>{
    res.send("hello");
})
app.listen(PORT , (req, res)=>{
    console.log("sever strat on port 4000")
})

