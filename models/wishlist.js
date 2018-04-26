var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var wishListSchema = new Schema({
  name: String,
  location: String,
  rating: String
});

var Wishlist = mongoose.model('Wishlist', wishListSchema);




















