//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
let register = require('./../model/SchemaDetails');
//Performing insertion of data in database
router.post('/', (req, res, next)=> {
  info.insertMany({
    "img" : req.body.img,
  	"date" : req.body.date,
  	"city" : req.body.city,
  	"min_temp" : req.body.min_temp,
    "max_temp" : req.body.max_temp,
    "humidity" : req.body.humidity,
    "real_feel" : req.body.real_feel,
    "cloud" : req.body.cloud
  },(err,data)=>{
  	if(err)
  	console.log(err);
  	else{
  		res.json(data);
  	}
  })
});

router.post('/register',(req, res, next)=> {
  register.insertMany({
    "userName" : req.body.userName,
    "phoneNumber" : req.body.phoneNumber,
    "emailId" : req.body.emailId,
    "password" : req.body.password
  },(err,data)=>{
    if(err)
    console.log(err);
    else{
      res.json(data);
    }
  })
});
//exporting router
module.exports = router;
