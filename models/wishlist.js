var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var wishList = new Schema({
  name: String,
  location: String,
  rating: String
});

var Wishlist = mongoose.model('Wishlist', wishListSchema);



module.exports = Wishlist;


















