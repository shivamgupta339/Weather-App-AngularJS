//importing required dependencies
let express = require('express');
let fs = require('fs');
let morgan = require('morgan');
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let index = require('./routes/index');
let users = require('./routes/users');
let updates = require('./routes/updates');
let deletes = require('./routes/deletes');
let dbURL = require('./config/config');
let http = require('http');
let cors = require('cors');

const app = express();
app.use(cors());


let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);																			//Calling index 
app.use('/users', users);  																//Calling users
app.use('/updates',updates);															//Calling Updates	
app.use('/deletes',deletes);															//Calling Delete
mongoose.connect(dbURL,{useMongoClient : true});					//Connecting with Database


console.log("Connected");
app.listen(1337);																					//Defining listen method for defining port
module.exports=app;