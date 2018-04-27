var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var wishListSchema = new Schema({
  name: String,
  location: String,
  rating: String,
  userId: {
  	type: Schema.Types.ObjectId,
  	ref: 'User',
  	required: true
  }
});

var Wishlist = mongoose.model('Wishlist', wishListSchema);
module.exports = Wishlist



















