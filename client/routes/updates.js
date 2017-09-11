//importing required dependencies
let express = require('express');
let router = express.Router();
let info = require('./../model/Schema');
//Performing updation of data stored in database
router.put('/:date/:city/:real_feel/:min_temp/:max_temp/:humidity', (req, res, next)=> {
  info.update({
    "date" : req.params.date,
    "city" : req.params.city
  },
  {$set : {"real_feel": req.params.real_feel,
            "min_temp": req.params.min_temp,
            "max_temp": req.params.max_temp,
            "humidity": req.params.humidity
}
  },(err,data)=>{
    if(err)
    console.log(err);
    else{
      res.json({data});
    }
  })
});
//exporting router
module.exports = router;