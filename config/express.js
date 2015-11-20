var express = require("express"),
	swig = require("swig"),
	session = require("express-session"),
	compression = require("compression"),
	cookieParser = require("cookie-parser"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	csrf = require("csurf"),
	winLogger = require("winston"),
	multer = require("multer"),
	sessionMan = require("cookie-session");

var mongoConnect = require("connect-mongo")(session);
var flashConnect = require("connect-flash"),
	viewHelpers = require("view-helpers"),
	pkg = require("../package.json"),
	config = require("../config");

var env = process.env.NODE_ENV || 'dev';
 

 //compression
module.exports = function(app,passport){
 //console.log("passport=======================",passport);
 app.use(compression({
 	threshold : 512
 }));
 //static files
app.use(express.static(config.root + "/public"));
 //logging
var log;
if(env !== "dev"){
	log = {
		stream : {
			write : function(message){
				winston.info(message);
			}
		}
	}
} else {
	log = "dev";
}
 //dev/prod
if(env === "dev"){
	swig.setDefaults({
		cache : false
	});
}

  app.engine('html', swig.renderFile);
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'html');

 //package.json to views
app.use(function(req,res,next){
	res.locals.pkg = pkg;
	res.locals.env = env;
});
 //bodyparser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//app.use(multer());
  app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));
 //cookieparser
app.use(cookieParser());
app.use(sessionMan({secret : "secret"}));
app.use(session({
	secret: pkg.name,
    proxy: true,
    saveUninitialized: true,
	resave : true,
	store : new mongoConnect({
		url : config.db,
		collection : 'sessions'
	})
}));
// passport
app.use(passport.initialize());
app.use(passport.session());
//flash
app.use(flashConnect());
 //view-helpers
app.use(viewHelpers(pkg.name));
 //csrf
 if(env === "prod" || env === "dev"){
 	app.use(csrf());

 	app.use(function(req,res,next){
 		res.locals.csrf_token = req.csrfToken();
 		next();
 	});
 }

};









