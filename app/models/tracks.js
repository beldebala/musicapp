var mongoose = require("mongoose");

//adding album schema
var Schema = mongoose.Schema;

var tracksSchema = new Schema({
	user_id : {type: String, default: ''},
	album_id : {type: String, default: ''},
	title : {type: String,default: ''},
	description : {type: String,default: ''},
	track_filename : {type: String,default: ''}
});

//validations
tracksSchema.path('user_id').required(true, 'Need a User');
tracksSchema.path('album_id').required(true, 'Need a Album.');
tracksSchema.path('title').required(true, 'Need a Title.');
tracksSchema.path('description').required(true, 'Need a Description.');
tracksSchema.path('track_filename').required(true, 'Need a Track File Name.');
//albumSchema.path('body').required(true, 'Album body cannot be blank');

mongoose.model('Tracks', tracksSchema);

