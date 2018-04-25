var mongoose = require(
	'mongoose');

var hikeSchema = new Schema({
	name: String,
	location: String,
	description: String,
	difficulty: String,
});

module.exports = mongoose.model('User', userSchema);