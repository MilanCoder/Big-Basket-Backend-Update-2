const shortid = require('shortid');

const refCodGen={

    nosplit(no){
    let strlength= no.length;
    no = no.slice(strlength-2,strlength);
     return no;
    },

    refCodeGen(no)
    { let str;
        let random=shortid.generate()

        str= 'JMN'+random + this.nosplit(no);
    

    return str;
    }
}


module.exports=refCodGen;
