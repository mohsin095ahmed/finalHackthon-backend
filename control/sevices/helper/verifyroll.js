
const verifyRoll = (req,res,next)=>{
     const roll = req.body.roll;
    if(roll !== "admin"){
        return  res.status(400).send({status: "400", message:"only admin acses" })
    }
     next()
}

export default verifyRoll;