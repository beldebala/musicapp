// config for passport
var mongoose = require("mongoose");
var localStrategy = require("passport-local");
var User = mongoose.model("User");

//load passport provider files
var fb = require('./passport/facebook');

//load other providers here

module.exports = function(passport){
	//check this passport methods
	passport.serializeUser(function(user,done){
		done(null,user.id);
	});

	passport.deserializeUser(function(id,done){
		//need to write
		User.load({criteria : {_id : id}},done);
	});

	passport.use(fb);

//add otther providers usage here

};