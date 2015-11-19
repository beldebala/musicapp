var mongoose = require("mongoose");

//adding album schema
var Schema = mongoose.Schema;

var albumSchema = new Schema({
	user_id : {type: String, default: ''},
	title : {type: String, default: ''},
	img_filename : {type: String, default: 'default_album.jpg'}
});

mongoose.model('Album', albumSchema);

