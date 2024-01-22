import express from "express";
import mongoose from "./control/sevices/db/index.js";
import route from "./route/index.js";
import cors from "cors"
import 'dotenv/config';
const PORT = process.env.PORT || 4000

const app =express();
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));
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

