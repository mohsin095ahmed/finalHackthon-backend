import User from "../../../model/users.js";

const verifyRoll = async(req,res,next)=>{
    const id= req.params.id;
    console.log(id, "shshh")
    const user = await User.findOne({_id:id});
    console.log(user)
    const roll = user.roll;
    
    console.log(user)
    if(roll !== "admin"){
        return  res.status(400).send({status: "400", message:"only admin acses" })
    }
     next()
}

export default verifyRoll;