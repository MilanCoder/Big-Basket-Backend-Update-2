const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');
const path  = require('path');
const port = process.env.port||1234;
const upload = require('./api/multer/uploadCode');

const storage = multer.diskStorage({
    destination:'./uploads/',
    filename:function(req,file,cb){
        cb(null,file.fieldname + path.extname(file.originalname));

    }
})
const uploadDetails = upload(storage);



app.use(cors());
app.use(express.static("public"));

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
var routes = require('./api/routes/empRoutes');
routes(app);

app.listen(port);