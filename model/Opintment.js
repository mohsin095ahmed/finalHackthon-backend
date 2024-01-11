import mongoose, { Schema } from "mongoose";

const OpintmentSchema = mongoose.Schema({
    patint:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
        
    },
    date:{
        type:Schema.Types.String,
        required:true,
    },
    time:{
        type :Schema.Types.String,
        required:true,
     
    },
    year:{
        type:Schema.Types.String,
        required:true,
    },
    month:{
        type:Schema.Types.String,
        required:true,
    },

    doctorId:{
     type:Schema.Types.ObjectId,
     ref:"Doctor",
     required:true,
    }
})
const Opintment = mongoose.model("Opminetment", OpintmentSchema);
export default Opintment;