const nullChecker={
    check(val,res){
        if(val==null){
            res.json('Please enter all the values');
        }
    }
}


module.exports=nullChecker;