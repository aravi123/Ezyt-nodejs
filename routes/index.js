var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');			//required
var db = require('../Database/database.js');
	/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var silence = new db({ name: 'Silence' });
var silence1 = new db({name:'sdds'});

silence.save(function (err,ok) {
	if (err) {										//database
		console.log("error");
	}
	else{
		console.log("okay");
	}
});
module.exports = router;
