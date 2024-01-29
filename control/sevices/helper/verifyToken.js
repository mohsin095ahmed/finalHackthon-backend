import  jwt  from "jsonwebtoken";
import 'dotenv/config'

const veryfitoken =(req,res,next)=>{
console.log(req.headers.authorization)
    const { authorization} = req.headers;
    const token = authorization && authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
    if(err){
        return res.status(401).send({status:"401", message:err.message})
    }
    
     next()
      });
}
export default veryfitoken;