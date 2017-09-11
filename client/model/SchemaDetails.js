//importing required dependencies
let mongoose = require('mongoose');
mongoose.set('debug',true);
let schema = mongoose.Schema;
//defining schema of our collection
let assigSchema = new schema({
	userName : String,
	phoneNumber : Number,
	emailId : String,
	password : String
},{collection : "register", versionKey : false, unique: true});
let model = mongoose.model('register',assigSchema);
//exporting model
module.exports = model;