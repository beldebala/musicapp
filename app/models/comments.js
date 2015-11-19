var mongoose = require("mongoose");

//adding album schema
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
	user_id : {type: String, default: ''},
	track_id : {type: String, default: ''},
	content : {type: String,default: ''},
	timeline_position : {type: String,default: ''},
});

//validations
tracksSchema.path('user_id').required(true, 'Need a User');
tracksSchema.path('track_id').required(true, 'Need a Track.');
tracksSchema.path('content').required(true, 'Need a comment content.');
tracksSchema.path('timeline_position').required(true, 'Need a Time Line position.');

mongoose.model('Comments', commentsSchema);

