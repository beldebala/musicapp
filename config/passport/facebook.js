/*
* Module dependencies
*/

var mongoose = require("mongoose");
var fbStrategy = require("passport-facebook").Strategy;
console.log("Env data =====>",process.env);
var config = require('../config');
var User = mongoose.model("User");
console.log("++++++++++++++=====>",config.fb);
// Expose the passport-facebook
module.exports = new fbStrategy({
	clientID : config.fb.clientID,
	clientSecret : config.fb.clientSecret,
	callbackURL : config.fb.callbackURL ,
        profileFields: ['id','photos', 'emails']
},function(aceessToken,refreshToken,profile,dn){
	var options = {
		criteria : {'facebook.id' : profile.id}
	};
	User.load(options,function(error,user){
        if(error) return dn(error);
        if(!user){
                console.log("user not found");
        	user = new User({
        		name : profile.displayName,//fb api fill,
        		email : profile.emails[0].values,//,
        		facebook: profile.username,//
        		provider: 'facebook',
        		facebook: profile._json
        	});

        	user.save(function(err){
        		if(err){
        			console.log(err);
        		}
        		return dn(error,user);
        	});
        }
        else{
                console.log("user found");
        	return dn(error,user);
        }
	});
})
