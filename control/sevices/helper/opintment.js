import Opintment from "../../../model/Opintment.js"
import Doctor from "../../../model/doctor.js"

export const checkOpintment = async(data)=>{
    const timing = ["9 to 10", "10 to 11", "11 to 12", "12 to  1", "1 to 2", "2 to 3", " 3 to 4"];
    const check = await Opintment.find({doctorId:data.doctorId, date:data.date, year:data.year, month:data.month }).exec();
    const avilableTiming = timing.filter( (t)=>{
        return   !check.find((a)=>{
            return t === a.time
        })
    });
    return avilableTiming;
}




export const createOpintment = async(data)=>{
   const check = await Opintment.find({doctorId:data.doctorId, date:data.date, time:data.time, year:data.year, month:data.month });
     console.log(check)
   if(check.length > 0){
       return "time is buzy"
   }
   const opintment = await new Opintment(data);
   await opintment.save();
   return opintment; 
};

export const patintOppintment = async(id)=>{
    const result = await Opintment.findOne({patint:id}).populate("patint", "name email").populate("doctorId");
    return result;
};

export const deleteOpintment = async (id)=>{
   const result = await Opintment.deleteOne({_id:id});
   return result;
}

export const updateOpintment = async(id,data)=>{
    const check = await Opintment.find({doctorId:data.doctorId, date:data.date, time:data.time, year:data.year, month:data.month });
    if(check){
        return " time is buzy"
    }

    if(data.time){
       const update = await Opintment.updateOne({_id:id},{time:data.time});
       return update;
    }else if(data.date){
        const update = await Opintment.updateOne({_id:id},{date:data.date});
        return update;
    }else if(data.month){
        const update = await Opintment.updateOne({_id:id},{month:data.month});
        return update;
    }else if(data.year){
        const update = await Opintment.updateOne({_id:id},{year:data.year});
       return update;
    }
   
};


// ADMINS FUNCION

export const getAllOpintment = async()=>{
    const opintment = await Opintment.find({}).populate("patint", "name email").populate("doctorId");
    return opintment
}