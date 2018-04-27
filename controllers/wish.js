

// Include express 
var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var isLoggedIn = require('../middleware/isLoggedIn');
// Include the user model!
var User = require('../models/user');
var Wishlist = require('../models/wishlist');



// Render the page with the wishlist form
router.get('/', isLoggedIn, function(req, res) {
	Wishlist.find({userId: req.user.id}, function (err, wishes) {
		if(err){
			console.log(err);
		} else{
			// console.log(wishes)
			res.render('wishlist', {wishes});
		}
	})
	
});

router.post('/', function(req, res, next){
	// results = JSON.parse(req.body);
	console.log(req.body);
	var favorite = req.body
	favorite.userId = req.user.id
	Wishlist.create(req.body, function(err, hike) {
		if(!err){
			// res.render("/wishlist");
		}else{
			console.log(err);
		}
	});

});

router.delete('/:id', function(req, res){
	Wishlist.findByIdAndRemove(req.params.id, function(err, wishlist){
		if(err){
			console.log(err);
		}else {
			res.send()
		}
	})
});



// Allow other files to access the routes defined here
module.exports = router;