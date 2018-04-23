console.log('JS is working!');


// Include express 
var express = require('express');
var request = require('request');
var router = express.Router();

// Include the user model!
var User = require('../models/user');

// Render the trails API 
router.get('/api', function(req, res) {
	request('https://www.hikingproject.com/data/get-trails?lat=47.7511&lon=-120.7401&maxDistance=200&key=200255070-17840d34440a3169dc12151505467053', function(error, response, body){
		res.send(body);
	})
	
});






module.exports = router;