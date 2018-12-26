const upload = require('../multer/uploadCode')
module.exports = function(app){
app.post("/upload",(res,req)=>{
   upload(req,res,(err)=>{
       if(err){
           console.log(err);
       }else{
           console.log(req.file)
       }

   })

   }  
)
}