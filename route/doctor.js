import express from "express";
import { createDoctor, deleteDoctor, getAllDoctor, serchDoctor, serchDoctorById, updateDoctor } from "../control/sevices/helper/doctor.js";
const doctorRoute = express.Router();

doctorRoute.get("/", async(req,res)=>{
    try{
       const doctors = await getAllDoctor();
       return res.status(200).send({status: "200",  doctors:  doctors });
    }catch(err){
        return res.status(400).send({status: "400",  message:  err.message });
    }
})
doctorRoute.get("/doctorId/:id", async(req,res)=>{
    const id = req.params.id;
    try{
      const result = await serchDoctorById(id);
      return  res.status(200).send({status: "200",  doctor:  result });
    }catch(err){
        return res.status(400).send({status: "400",  message:  err.message });
    }
})

doctorRoute.get("/:search", async(req,res)=>{
    const data = req.params.search;
    try{
       const results = await serchDoctor(data);
       return res.status(200).send({status: "200",  results });
    }catch(err){
        return res.status(400).send({status: "400",  message:  err.message });
    }
})



doctorRoute.post("/", async(req, res)=>{
    try{
       const doctor = await createDoctor(req.body);
       if(doctor === "Doctor is alredy exist"){
        return res.status(400).send({status: "400",  message:  doctor });
       }else{
        return res.status(201).send({status: "201",  message:  doctor });
       }
    }catch(err){
        return res.status(400).send({status: "400",  message:err.message});
    }
});

doctorRoute.put("/:id", async(req, res)=>{
    const id = req.params.id;
    try{
        const update = await updateDoctor(id, req.body);
        return res.status(201).send({status: "201",  message:  update });
    }catch(err){
        return res.status(400).send({status: "400",  message: err.message });
    }
})

doctorRoute.delete("/:id",async(req, res)=>{
    const id = req.params.id;
    try{
        const Doctor = await deleteDoctor(id, req.body);
        return res.status(201).send({status: "201",  message:  Doctor });
    }catch(err){
        return res.status(400).send({status: "400",  message: err.message });
    }
})

export default doctorRoute;