/*
* Module dependencies
*/

var mongoose = require("mongoose");
var fbStrategy = require("passport-facebook").Strategy;
var config = require('config');
var User = mongoose.model("User");

// Expose the passport-facebook
module.exports = new fbStrategy({
	clientId : config.fb.clientID,
	clientSecret : config.fb.clientSecret,
	callbackURL : config.fb.callbackURL
},function(aceessToken,refreshToken,prof,dn){
	var options = {
		//need to check 
	};
	User.load(options,function(error,user){
        if(error) return dn(error);
        if(!user){
        	user = new User({
        		name : //fb api fill,
        		email : //,
        		facebook: //
        	});
        	user.save(function(err){
        		if(err){
        			console.log(err);
        		}
        		return dn(error,user);
        	});
        }
        else{
        	return dn(error,user);
        }
	});
})