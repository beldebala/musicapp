var fs = require('fs');
var env = {};
var environFile = require("path").join(__dirname,'environment.json');


if(fs.existsSync(environFile)){
	//load the file and load to process.env
}

module.exports = function(){
	return {
		db : "" //mongodb
		fb : {
			clientID : process.env.FB_CLIENT_ID,
			clientSecret : process.env.FB_SECRET,
			callbackURL : "" //we need give
		}
	};
};