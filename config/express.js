var express = require("express"),
	swig = require("swig"),
	compression = require("compression"),
	cookieParser = require("cookie-parser"),
	csrf = require("csrf"),
	winLogger = require("winston"),
	sessionMan = require("cookie-session");

var mongoConnect = require("connect-mongo")(session);
var flashConnect = require("connect-flash"),
	viewHelpers = require("view-helpers"),
	pkg = require("../package.json"),
	config = require("config");

var env = process.env.NODE_ENV || 'dev';
