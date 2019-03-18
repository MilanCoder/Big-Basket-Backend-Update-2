const shortid = require('shortid');

const idGen={

    nosplit(no){
    let strlength= no.length;
    no = no.slice(strlength-2,strlength);
     return no;
    },

    idgenerator(no)
    { let str;
        let random=shortid.generate()

        str= random + this.nosplit(no);
    

    return str;
    }
}


module.exports=idGen;
