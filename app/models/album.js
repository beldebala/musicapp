var mongoose = require("mongoose");

//adding album schema
var Schema = mongoose.Schema;

var albumSchema = new Schema({
	user_id : {type: String, default: ''},
	title : {type: String, default: ''},
	tracks : [{
	title : {type: String,default: ''},
	description : {type: String,default: ''},
	track_filename : {type: String,default: ''}
}],
	img_filename : {type: String, default: 'default_album.jpg'}
});

//validations
albumSchema.path('title').required(true, 'Album title cannot be blank');
//albumSchema.path('body').required(true, 'Album body cannot be blank');

mongoose.model('Album', albumSchema);

