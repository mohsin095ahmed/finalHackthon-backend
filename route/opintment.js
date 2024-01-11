import exprees from "express";
import { checkOpintment, createOpintment, deleteOpintment, getAllOpintment, patintOppintment, updateOpintment } from "../control/sevices/helper/opintment.js";
import verifyRoll from "../control/sevices/helper/verifyroll.js";
import veryfitoken from "../control/sevices/helper/verifyToken.js";
const OpintmentRoute = exprees.Router();

OpintmentRoute.post("/",veryfitoken, async(req,res)=>{
    try{
       const opintment = await createOpintment(req.body);
       if(opintment === "time is buzy" ){
        return res.status(401).send({status: "401",  message:opintment }); 
       }else{
        return res.status(200).send({status: "200",  opintment });
       }
       }catch(err){
        return res.status(400).send({status: "400",  message:err.message });
    }
});


OpintmentRoute.get("/check",veryfitoken, async(req, res)=>{
    try{
        const check =  await checkOpintment(req.body);
        return res.status(200).send({status: "200",  check });
    }catch(err){
        return res.status(400).send({status: "400", message: err.message });
    }
})

OpintmentRoute.delete("/:id",veryfitoken, async(req,res)=>{
      const id= req.params.id;
    try{
        const result = await deleteOpintment(id);
        return res.status(200).send({status: "200", result });
    }catch(err){
        return  res.status(400).send({status: "400", message:err.message });
    }
});

OpintmentRoute.put("/:id",veryfitoken, async(req,res)=>{
    const id= req.params.id;
    try{
        const result = await updateOpintment(id, req.body);
        return res.status(200).send({status: "200", result });
    }catch(err){
        return  res.status(400).send({status: "400", message:err.message });
    }
})

OpintmentRoute.get("/:id",veryfitoken, async(req,res)=>{
    const id= req.params.id;
    try{
        const result = await patintOppintment(id);
        return res.status(200).send({status: "200", result });
    }catch(err){
        return  res.status(400).send({status: "400", message:err.message });
    }
})


OpintmentRoute.get("/", verifyRoll, veryfitoken, async(req,res)=>{
    try{
        const result = await getAllOpintment();
        return res.status(200).send({status: "200", result });
    }catch(err){
        return  res.status(400).send({status: "400", message:err.message });
    }
})
export default OpintmentRoute;