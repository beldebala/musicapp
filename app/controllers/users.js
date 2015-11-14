var mongoose = require("mongoose");
var User = mongoose.model("User");
var utils = require("../../utils/util");

exports.load = function(request,response,next,id){
	var options = {
		criteria : {_id : id}
	};
	User.load(options,function(err,user){
		if(err) return next(err);
		if(!user) return next(new Error("Failed User"+id));
		request.profile = user;
		next();
	});
};

exports.signup = function(request,response){
	res.render("users/signup",{
		title : "Sing Up for Music App",
		user : new User()
	});
};