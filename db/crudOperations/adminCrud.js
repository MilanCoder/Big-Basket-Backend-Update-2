const Admin=require('../schemas/adminLoginSchema');
const empCrud = require('../schemas/empSchema');
const adminCrud={
login(res,object){
    Admin.findOne(object,function(error,user){
        if(error){
            res.json("Invalid data");
        }
        else{
            return user;
        }
    })
}
,
getUnverifiedEmployees(res){
empCrud.find({isVerified:false},(error,users)=>{
  if(error){
res.json('Some Error occurred');
  }
  else{
      return users;
  }
})
}

}

module.exports = adminCrud;