const express=require('express');
const adminRoutes=express.Router();
const jwt=require('jsonwebtoken');
const multer=require('multer');
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");
const nullChecker=require('../../Utils/nullChecker');
const adminCrud = require('../../db/crudOperations/adminCrud');
const upload=require('../../Utils/multer/commonExcelUpload');    //requiring multer for excel upload
const upload2=require('../../Utils/multer/productImagess3');   //requiring multer s3 for image upload
const singleUpload=upload.single('productupload');        
const securekey ='Imsecure';          //secret key of webtokens
const productCrud=require('../../db/crudOperations/Product'); 

adminRoutes.post('/login',function(req,res){
    adminCrud.login(res,{id:req.body.id, name:req.body.name, password:req.body.password});
    jwt.sign({adminData},securekey,{expiresIn:'3000s'},(err,token)=>{      //token is generated after checking the presence of user
        res.json({
            token:token
        })
    })
})





adminRoutes.post('/upload',function(req,res){
    /* dont mess with multer the req above and below are not even same*/
    var exceltojson; //Initialization
    singleUpload(req,res,function(err){
      //  jwt.verify(req.body.idToken,securekey,(error,authData)=>{     //checking if token is present or not
        //    if(error){
           //     res.json("session timed out");
         //   }
           // else{
        if(err instanceof multer.MulterError){
            console.log(err);
        }else if(err){
            //console.log(req.file)
            res.json(err);    
        }
        console.log(req.file,res.file);
        if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
            exceltojson = xlsxtojson;
        } else {
            exceltojson = xlstojson;
        }

        try {
            exceltojson({
                input: req.file.path,
                output: null, //since we don't need output.json
                lowerCaseHeaders:true
            }, function(err,result){
                if(err) {
                    return res.json({error_code:1,err_desc:err, data: null});
                } 
                if(result!=null){
                   // productCrud.uploadProducts(req,res,result);
                    console.log(result);
                }
                //productCrud.uploadProducts(req,res,obj);
                // result.forEach(obj=>{
                //     productCrud.uploadProducts(req,res,obj);                         //pushing objects to db after traversing
                // })
                
                //res.json({error_code:0,err_desc:null, data: result});
            });
        } catch (e){
            res.json({error_code:1,err_desc:"Corupted excel file"});
        }
    //}
    })
    })

        
   // })
    
//});



adminRoutes.post('/editProducts',verifyToken,(req,res)=>{
    jwt.verify(req.token,securekey,(error,authData)=>{
        if(error){
            res.json("token not valid or session timed out");
        }
        else{
            //console.log("its here");
            nullChecker.check(req.body.products,res);
            productCrud.editProducts(req,res);
        }
    })
    
})

adminRoutes.post('/editCategoryList',verifyToken,(req,res)=>{
    jwt.verify(req.token,securekey,(error,authData)=>{
        if(error){
            res.json("token not valid or session timed out");
        }
        else{
            nullChecker.check(req.body.categorylist,res);
            productCrud.uploadProducts(req,res,req.body.categorylist);
        }
    })
})

adminRoutes.post('imageUpload',(req,res)=>{
    
            upload2(req,res,function(err){
                jwt.verify(req.body.idToken,securekey,(error,authData)=>{
                    if(error){
                        res.json("token not valid or session timed out");
                    }
                    else{
                    if(err){
                    res.json("multer s3 error");
                    }
                    else{
                    //push url to db
                    nullChecker.check(req.files,res);
                    var obj={"uri":req.files.location};
                    productCrud.imageUpload(req,res,obj);
                }
            }
                })
            })
        
    
})


function verifyToken(req,res,next){               //checking for webtoken in the header of req and filling it into req.token
    let bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if(typeof bearerHeader!= 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token= bearerToken;
    next();
    
    }else{
        res.sendStatus(403);
    }
}






module.exports=adminRoutes;