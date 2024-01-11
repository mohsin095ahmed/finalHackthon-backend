import express from "express";
import UserRouter from "./user.js";
import UploadRouter from "./upload.js";
import doctorRoute from "./doctor.js";
import OpintmentRoute from "./opintment.js";
const route = express.Router();


route.use("/user", UserRouter);
route.use("/upload", UploadRouter);
route.use("/doctor", doctorRoute);
route.use("/opintment", OpintmentRoute);




export default route;