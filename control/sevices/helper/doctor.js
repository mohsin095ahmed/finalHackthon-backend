import Doctor from "../../../model/doctor.js"


export const createDoctor = async(data)=>{
    const findDoctor = await Doctor.findOne({email:data.email});
    if(findDoctor){
        return "Doctor is alredy exist";
       }
    const doctor = await new Doctor(data);
    await doctor.save();
    return doctor;
};

export const updateDoctor = async(id, data)=>{
    //const findDoctor = await Doctor.findOne({_id:id});
    if(data.name){
        const update = await Doctor.updateOne({_id:id},{name:data.name});
        return update;
    }else if(data.image){
       const update = await Doctor.updateOne({_id:id},{image:data.image});
       return update;
    }else if(data.qulification){
        const update = await Doctor.updateOne({_id:id},{qulification:data.qulification});
        return update;
    }else if(data.expert){
        const update = await Doctor.updateOne({_id:id},{expert:data.expert});
        return update;
    }else if(data.email){
        const update = await Doctor.updateOne({_id:id},{email:data.email});
        return update;
    }
}

export const deleteDoctor = async(id)=>{
    const user = await Doctor.deleteOne({_id:id});
    return user;
}

export const getAllDoctor = async()=>{
    const user = await Doctor.find();
    return user;
}

export const serchDoctor = async(data)=>{
    const findDoctorByName = await Doctor.find({name:data});
    const findDoctorByExpert = await Doctor.find({expert:data});
    return {findDoctorByExpert, findDoctorByName};

}