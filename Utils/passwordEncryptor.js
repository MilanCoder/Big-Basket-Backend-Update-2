const bcrypt = require('bcrypt');
const passwordEncryptor = {
    generatePassHash(plainText,salt){
        let passhash = null;
        if(plainText!=null){
        bcrypt.hash(plainText, salt, function(err, hash) {
            passhash=hash;
        });
    }
return passhash;
}
,
verifyPassword(plainText,hash){
    let isPresent = false;
    bcrypt.compare(plainText, hash, function(err, res) {
    if(res==true){ 
        isPresent=true;
    }});
return isPresent;
}
}

module.exports = passwordEncryptor;