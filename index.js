const express=require("express");
const path=require("path");
const cors=require("cors");
const app=express();

console.log('req is here');

const port=process.env.PORT||1234;
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const adminRoutes = require('./api/routes/adminRoutes');
const empRoutes=require('./api/routes/empRoutes');   //require routes
const ProductRoutes=require('./api/routes/ProductRoutes');
const vendorProductRoutes=require('./api/routes/vendorProductsRoutes');

app.use('/admin',adminRoutes);
app.use('/employee',empRoutes); 
app.use('/Products',ProductRoutes);   
app.use('/vendorProducts',vendorProductRoutes);                  //use routes
//app.use('/user');


app.use('**',express.static(path.join(__dirname, 'public/error.html')));


app.listen(port);