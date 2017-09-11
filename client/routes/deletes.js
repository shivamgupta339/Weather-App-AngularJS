//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
//deleteing data from database
router.delete('/:date/:city', (req, res, next)=> {
  info.remove({
   	'date' : req.params.date,
    'city' : req.params.city
  },
  (err,data)=>{
    if(err)
    console.log(err);
    else{
      res.json(data);
    }
  })
});
//exporting router
module.exports = router;