const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination:'./uploads/',
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-'+ req.body.categoryId+'-'+req.body.subcategoryId+'-'+req.body.productId+'-'+req.body.subproductId+'-'+req.body.index+path.extname(file.originalname));

    }
})
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


    
      const upload=multer({
    storage:storage,
   limits:{fileSize:1000000},
    fileFilter:function(res,file,cb){
        checkFileType(file,cb)
    }
}).single('myImage');




module.exports = upload;