import mongoose, { Schema } from "mongoose";


const UserSchema = mongoose.Schema({
    name:{
        type:Schema.Types.String,
        required:true,
    },
    roll:{
        type:Schema.Types.String,
        required:true,
    },
    image:{
        type:Schema.Types.String,
        required:true,
    },
    email:{
        type:Schema.Types.String,
        required:true,
        unique:true,
    },
    password:{
        type:Schema.Types.String,
        required:true,
    }

})
const User = mongoose.model("User", UserSchema);
export default User