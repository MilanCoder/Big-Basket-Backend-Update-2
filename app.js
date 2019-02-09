const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');
const path  = require('path');
const port = process.env.port||1234;
const routes = require('./api/routes/empRoutes');
const adminRoutes = require('./api/routes/adminRoutes');






app.use(cors());
app.use(express.static("public"));


const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/', routes);
app.use('/admin',adminRoutes);

app.listen(port);