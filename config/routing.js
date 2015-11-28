//load the required controllers
var users = require("../app/controllers/users");
var home = require('../app/controllers/home');
//load the middleware
var auth = require("./middlewares/auth");

//var songsAuth = [auth.requiresLogin,auth.songs.hasAuthorization];


module.exports = function(app,passport){
	//route users

	console.log("routing");


  app.get('/', home.index);
  app.get('/test',home.test);
  app.get('/login',home.login);
  app.post('/track',home.test);
	
  app.get('/auth/facebook',
  passport.authenticate('facebook' , {scope : 'email' , sucessFlash : 'Welcome!'}  ));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/login');
  });


};