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
		//need to write
	});

	passport.deserializeUser(function(id,done){
		//need to write
	});

	passport.use(fb);

//add otther providers usage here

};