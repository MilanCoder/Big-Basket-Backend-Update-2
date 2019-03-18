function stringCompare(str1,str2){
    str1 = str1.replace(/\s/g,'');
    str2 = str2.replace(/\s/g,'');
    if(str1.length<=str2.length){
    for(let i =0;i<str2.length;i++){
      let cmpstring = str2.substring(i,str1.length+1);
      if(cmpstring.length==str1.length){
        if(cmpstring.localCompare(str1 ,'en', {sensitivity: 'base'})==0){
         return 'equal';
        }

    } 
}
    
}
return null;

}


module.exports=stringCompare;