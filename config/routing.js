//load the required controllers
var users = require("../app/controllers/users");

//load the middleware
var auth = require("./middlewares/auth");

var songsAuth = [auth.requiresLogin,auth.songs.hasAuthorization];


module.exports = function(app,passport){
	//route users

	app.get("/signup",users.signup);
	//rest of the routes
	//app.get("/songs",songs.index);
	//app.get("/songs/new",auth.requiresLogin,songs.new);

   //handle 404 and 500

};