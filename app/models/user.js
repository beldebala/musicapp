var mongoose = require("mongoose");
var crypto = require("crypto");

var Schema = mongoose.Schema;

var oAuthTypes = [
					'facebook',
					'google',
					'twitter',
					'github',
					'linkedin'
];

/*
*  Define user schema here
*/

var userSchema = new Schema({
	name : {type: String, default: ''},
	email: {type: String,default: ''},
	username: {type: String,default: ''},
	authToken: {type: String,default: ''},
	provider : {type: String,default:''},
	hashed_password: {type: String,default:''},
	salt: {type: String,default:''},
	facebook : {},
	twitter: {},
	github: {},
	linkedin: {},
	google: {}
});

/*
* Virtuals
*/
userSchema.virtual('password')
		  .set(funtion(){
		  	//
		  })
		  .get(function(){
		  	//
		  });

/**
*  Methods on userSchema
*/
userSchema.Methods = {
	randNum : function(){
		//logic for random number
	}
};

/**
* validations of userSchema
*/

userSchema.path("name").validate(function(name){
	//validation logic
});

