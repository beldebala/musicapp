exports.requiresLogin = function(request,response,next){
	if(request.isAuthenticated()) return next(); //implement isAuthenticated
	if(request.method == 'GET') request.session.returnTo = request.originalUrl;
	res.redirect("/login");
};


//implement songs,user,comments
exports.user = {
	hasAuthorization : function(request,response,next){
		if(request.profile.id != request.user.id){
			request.flash('info','You are not Authorized to view this section');
			return res.redirect("/users/"+request.profile.id);
		}
		next();
	}
};
