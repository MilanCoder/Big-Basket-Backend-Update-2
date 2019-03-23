const admin=require('../schemas/adminLoginSchema');
const empCrud = require('../schemas/empSchema');


const adminCrud={
login(res,object){
   
    admin.findOne({'name':object.name},function(err,user){
       
        if(err){
            res.json(err);
        }else if(user!=null){
        
         if(object.password == user.password){
         return user;
        }}
        else{
            res.json({user:null})
        }
    })
}
,
getUnverifiedEmployees(res){
empCrud.find({isVerified:false},(err,users)=>{
  if(err){
res.json({'error':err});
  }
  else{
      res.json({'users':users});
  }
})
}
,
getVerifiedEmployees(res){
    empCrud.find({isVerified:true},(error,users)=>{
      if(error){
    res.json({'error':error});
      }
      else{
          res.json({'users':users});
      }
    })
    }
    ,
   verifyEmployee(id,res){
        empCrud.findOne({id:id},(error,user)=>{
          if(error){
        res.json({'error':error});
          }
          else{
              user.isVerified=true;
             
              user.save((err)=>{
                if(err){
                  console.log("some error occured during database query");
              }
              else{
                
                res.json({'isVerified':true})
              }  
              })
             
          }
        })
        } 
        ,
        unVerifyEmployee(id,res){
          empCrud.findOne({id:id},(error,user)=>{
            if(error){
          res.json({'error':error});
            }
            else{
                user.isVerified=false;
               
                user.save((err)=>{
                  if(err){
                    console.log("some error occured during database query");
                }
                else{
                  
                  res.json({'isVerified':false})
                }  
                })
               
            }
          })
          } 
    }

module.exports = adminCrud;