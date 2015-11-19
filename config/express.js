var express = require("express"),
	swig = require("swig"),
	compression = require("compression"),
	cookieParser = require("cookie-parser"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	csrf = require("csrf"),
	winLogger = require("winston"),
	sessionMan = require("cookie-session");

var mongoConnect = require("connect-mongo")(session);
var flashConnect = require("connect-flash"),
	viewHelpers = require("view-helpers"),
	pkg = require("../package.json"),
	config = require("config");

var env = process.env.NODE_ENV || 'dev';
 

 //compression

 app.use(compression({
 	threshold : 256
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
 //package.json to views
app.use(function(req,res,next){
	res.locals.pkg = pkg;
	res.locals.env = env;
});
 //bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(multer());
//app.use(met)
 //cookieparser
app.use(cookieParser());
app.use(sessionMan({secret : "fhgjhfgjhfgjhfg"}));
app.use(session({
	resave : true,
	store : new mongoConnect({
		url : config.db,
		collection : 'sessions'
	})
}));
// passport
app.use(passport.intialize());
app.use(passport.session());
//flash
app.use(flash());
 //view-helpers
app.use(viewHelpers(pkg.name));
 //csrf
 if(env === "prod"){
 	app.use(csrf());

 	app.use(function(req,res,next){
 		res.locals.csrf_token = req.csrfToken();
 		next();
 	});
 }









