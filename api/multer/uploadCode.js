const multer = require('multer');
const path = require('path')


function checkFileType(file,cb){
    const filetypes =/jpeg|png|jpg|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if(extname && mimetype){
        return cb(null,true)
    }else{
        return cb('error message');
    }
    }


    const upload = function(storageEngine){
      const uploadDetails=multer({
    storage:storageEngine,
   limits:{fileSize:1000},
    fileFilter:function(res,file,cb){
        checkFileType(file,cb)
    }
}).single('myImage');
return uploadDetails;
}



module.exports = upload;