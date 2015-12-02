// config for passport
var mongoose = require("mongoose");
var localStrategy = require("passport-local").Strategy;
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


//local Strategy 

     passport.use(new localStrategy(function(username ,password , done){

          var options = {
		       criteria : {'username' : username}
	        };


         process.nextTick(function() {
             // Auth Check Logic

                //need to write
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

         });

}))

};