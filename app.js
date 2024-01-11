import express from "express";
import mongoose from "./control/sevices/db/index.js";
import route from "./route/index.js";
import 'dotenv/config';
const PORT = process.env.PORT || 4000

const app =express();

//CONECTION ON MONGODB

const db = mongoose.connection;
app.use(express.json());
db.on("error", console.error.bind(console, "conection err:"));
db.once("open", ()=>{
    console.log("data base conected");
});


app.use("/api", route);

app.use("/", (req,res)=>{
    console.log("hello")
})
app.listen(PORT , (req, res)=>{
    console.log("sever strat on port 4000")
})

