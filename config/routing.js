//load the required controllers
var users = require("../app/controllers/users");
var home = require('../app/controllers/home');
//load the middleware
var auth = require("./middlewares/auth");

//var songsAuth = [auth.requiresLogin,auth.songs.hasAuthorization];


module.exports = function(app,passport){
	//route users

	console.log("routing");

/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get("/test",function(req, res){
	res.send("test url");
});
*/

  app.get('/', home.index);
  app.get('/test',home.test);
  app.get('/login',home.login);
	//app.get("/signup",users.signup);
	//rest of the routes
	//app.get("/songs",songs.index);
	//app.get("/songs/new",auth.requiresLogin,songs.new);

   //handle 404 and 500

};