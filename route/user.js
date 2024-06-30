import express from "express";
///import { addListener } from "nodemon";
import { Sigin, addUser, allUser, deleteUser, updateUser } from "../control/sevices/helper/user.js";
const UserRouter= express.Router();


UserRouter.post("/", async(req, res)=>{
    console.log(req.body)
    try{
         const user = await addUser(req.body);
         if(user === "user is alredy exist"){
          return res.status(400).send({status: "400",  message:  user });       
         }else{
          return res.status(200).send({status: "200",  user:  user }); 
         }
         
    }catch(err){
        return res.status(400).send({status: "200",  message:err.message })
    }
});


UserRouter.post("/login", async(req, res)=>{
    try{
       const loginuser = await Sigin(req.body);
       const { token, user} =loginuser;
       if( user && token){
         return res.status(201).send({status:"201",  token, user}) 
       }else if( loginuser === "password is incorect"){
         return res.status(404).send({status:"404", message: loginuser});
       }else if(loginuser === "user is not exixst"){
         return res.status(403).send({status:"403", message: loginuser});
       }
    }catch(err){
        return res.status(400).send({status:"400", message: err.message});
    }
})

UserRouter.put("/:id", async(req, res)=>{
  const id = req.params.id;
  try{
     const updatedUser = await updateUser(id, req.body);
     if(updateUser === "email is update"){
        return res.status(201).send({status:"201",message:updateUser})   
     }else if( updateUser === "password is update"){
      return res.status(201).send({status:"201",message:updateUser}) 
     }else{
      return res.status(201).send({status:"201",message:"update sucseefully"}) 
     }
     
  }catch(err){
    return res.status(400).send({status:"400",message:err.message})
  }
});

UserRouter.delete("/:id",async(req,res)=>{
  const id = req.params.id;
  try{
      const user = await deleteUser(id);
      return res.status(201).send({status:"201", message:user, })
  }catch(err){

  }
});



UserRouter.get("/", async(req,res)=>{
  try{
       const users =  await allUser();
       return res.status(201).send({status:"201", message:users, }) 
  }catch(err){
    return res.status(401).send({status:"401", message:err.message, })
  }
})


export default UserRouter;