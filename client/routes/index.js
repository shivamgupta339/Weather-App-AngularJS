//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
let register = require('./../model/SchemaDetails');
//retrieving data from database
router.get('/', (req, res, next)=> {
  info.find({},(err,data)=>{
  	if(err){
  		console.log(err);
  	}
   	else{
  		res.json(data);
  	}
	})
});
//exporting router

router.post('/signIn', (req, res, next)=> {
  register.find({
	"emailId" : req.body.emailId,
	"password" : req.body.password
  },(err,data)=>{
  	if(err){
  		console.log(err);
  	}
   	else{
  		res.json(data);
  	}
	})
});

module.exports = router;