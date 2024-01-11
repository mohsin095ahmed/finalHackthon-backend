//import { required } from "joi";
import mongoose, { Schema, model } from "mongoose";

const DoctorSchema = mongoose.Schema({
    name:{
        type:Schema.Types.String,
        required:true,
    },
    qulification:{
        type:Schema.Types.Array,
        required:true,
    },
    image:{
        type: Schema.Types.String,
        required:true,
    },
    expert:{
        type: Schema.Types.String,
        required:true,
    },
    email:{
        type: Schema.Types.String,
        uniqunique:true,
        required:true,
    }
})
const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;