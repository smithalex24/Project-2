// Include express 
var express = require('express');
var router = express.Router();

// Include the user model!
var User = require('../models/user');

// Render the page with the wishlist form
router.get('/wishlist', function(req, res) {
	res.render('wish/wishlist');
});





// Allow other files to access the routes defined here
module.exports = router;