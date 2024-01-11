import multer from "multer";
import fs from"fs-extra"
import 'dotenv/config'
import  cloudinary from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET_KEY, 
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/');
    
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    
  }
})

const upload = multer({
  storage: storage
})

export default upload;


 export const addimage = ()=>{ return  new Promise ((reslove, reject )=>{
  fs.readdirSync("images").forEach(  (file) => {
    
            cloudinary.v2.uploader.upload(`images/${file}`, (error, result)=>{
                   
                fs.remove(`images/${file}`,err =>{
                    if(err){
                      reject(err)
                     
                    }
                })
                
                if(error){
                  reject(error)
                }else{
                 reslove(result.url)
                }
                
                
              })
          });
 }) 
}