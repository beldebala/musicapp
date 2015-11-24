var fs = require('fs');
var env = {};
var environFile = require("path").join(__dirname,'environment.json');


if(fs.existsSync(environFile)){
  env = fs.readFileSync(environFile, 'utf-8');
  env = JSON.parse(env);
  Object.keys(env).forEach(function (key) {
    process.env[key] = env[key];
  });
}

module.exports = function(){
	return {
		db : 'mongodb://root:kismath@ds057204.mongolab.com:57204/mapp', //mongodb
		fb : {
			clientID : process.env.FB_CLIENT_ID,
			clientSecret : process.env.FB_SECRET,
			callbackURL : "http://localhost:3000/auth/facebook/callback" //we need give
		}
	};
};