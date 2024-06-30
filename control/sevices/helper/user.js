import User from "../../../model/users.js";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import 'dotenv/config'
export const addUser = async(data)=>{
    console.log("data---->",data)
    const findUser = await User.findOne({email:data.email});
    console.log("user--->", findUser)
    if(findUser){
        return "user is alredy exist"
       }
       const password = await bcrypt.hash(data.password, 12);
       const user = await new User({...data, password});
       await user.save();
       return user
}
export const Sigin = async(data)=>{
    const findUser = await User.findOne({email:data.email});
   
    if(!findUser){
        return "user is not exixst"
    }
    const compare = await bcrypt.compare(data.password, findUser.password);
    if(!compare){
       return "password is incorect"
    }
    const token = jwt.sign({_id: await findUser._id,roll: await findUser.roll},process.env.JWT_SECRET_KEY); 
        const{name, email,_id, roll, image}= findUser;
        const loginUser = { name,email,_id, roll,image }     
         return {user:loginUser, token};

}

export const updateUser = async(id, data)=>{
   if(data.name){
       const update = await User.updateOne({_id:id},{name:data.name});
       return update;
   }else if(data.image){
      const update = await User.updateOne({_id:id},{image:data.image});
      return update;
   }
   const findUser = await User.findOne({_id:id});
   const compare = await bcrypt.compare(data.password, findUser.password);
    if(!compare){
       return "password is incorect"
    }
   if(data.email){
    const update = await User.updateOne({_id:id},{image:data.email});
    return "email is update";
   }else if(data.password){
    const password = await bcrypt.hash(data.password, 12);
    const update = await User.updateOne({_id:id},{password:password});
    return "password is update";
    
   }
}

export const deleteUser = async(id)=>{
    const user = await User.deleteOne({_id:id});
    return user
}

export const allUser = async()=>{
    const user = await User.find();
    return user
}