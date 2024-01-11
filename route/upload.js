import express from "express";
import upload, { addimage } from "../control/sevices/helper/upload.js";
//import upload, { addimage } from "../contoralar/upload.js";
const UploadRouter = express.Router();
UploadRouter.post("/",upload.single("file"), async(req,res)=>{
    try{
         
          const image = await addimage();
          console.log("res--->",image);
          return res.status(201).send({status:"201",image, })
    }catch(err){
        console.log(err);
        return res.status(401).send({status:"401", message : err.message})
    }
    
})




export default UploadRouter;