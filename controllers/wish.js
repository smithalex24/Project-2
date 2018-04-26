// Include express 
var express = require('express');
var router = express.Router();

// Include the user model!
var User = require('../models/user');
var Wishlist = require('../models/wishlist');

// Render the page with the wishlist form
router.get('/', function(req, res) {
	res.render('wish/wishlist');
});

router.post('/', function(req, res){
	var results = JSON.parse(req.body);
	Wishlist.create(results, function(err, hike) {
		if(!err){
			res.render("/wishlist");
		}else{
			console.log(err);
		}
	})

});




// Allow other files to access the routes defined here
module.exports = router;