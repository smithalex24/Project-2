var mongoose = require(
	'mongoose');
var bcrypt = require('bcrypt');

//Define what a use looks like in the database
var userSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	}
});

// Make a function that checks whether the password is correct
userSchema.methods.isAuthenticated = function(password) {
	//Compare(typedInPassword, actualPassword)
	var isCorrectPassword = bcrypt.compareSync(password, this.password);
	return isCorrectPassword ? this : false;
}



// Hash the password BEFORE saving a user to database
userSchema.pre('save', function(next) {
	//Is the user being updated?
	//If yes, they alaready have a password, which has already been hashed. No action required.
	if(!this.isModified('password')){
		next();
	}
	else{
		this.password = bcrypt.hashSync(this.password, 10);
		next();
	}
});