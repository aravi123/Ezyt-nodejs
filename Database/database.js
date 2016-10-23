var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ezyttrial');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var orderschema = mongoose.Schema({
	name:String								//Collection properties define here
});

//Define Schemas here
var order = mongoose.model('Orders',orderschema);  //Collections Definition here


module.exports = order;