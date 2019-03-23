const multer=require('multer');
const path=require('path');

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: "Vkl1d8XigcZbpn8zNHORCGoPTm9pBtw0rThOCWmP",
  accessKeyId: "AKIAI46AMLBMIABES5WQ",
  region: "ap-south-1"
});

const s3 = new aws.S3();


module.exports=s3;