//importing required dependencies
let mongoose = require('mongoose');
mongoose.set('debug',true);
let schema = mongoose.Schema;
//defining schema of our collection
let assigSchema = new schema({
	img : String,
	date : String,
	city : String,
	min_temp : Number,
	max_temp : Number,
	humidity : Number,
	real_feel : Number,
	cloud : String
},{collection : "favourites", versionKey : false, unique: true});
let model = mongoose.model('favourites',assigSchema);
//exporting model
module.exports = model;