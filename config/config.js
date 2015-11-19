//config for app
var path = require("path");
var extend = require("../utils/util").extend;
var devEnv = require("./environment/dev");
var prodEnv = require("./environment/prod");
//prod
var defaults = {
	root : path.join(__dirname,'..')
};

module.exports = {
	dev : extend(devEnv,defaults),
	prod : extend(prodEnv,defaults)
}[process.env.NODE_ENV || 'dev']