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
commentsSchema.path('user_id').required(true, 'Need a User');
commentsSchema.path('track_id').required(true, 'Need a Track.');
commentsSchema.path('content').required(true, 'Need a comment content.');
commentsSchema.path('timeline_position').required(true, 'Need a Time Line position.');

//adding methods
commentsSchema.methods = {
	addTrack : function( user_id, track_id, content, timeline_position, cb ){
		this.user_id = user_id;
		this.track_id = track_id;
		this.content = content;
		this.timeline_position = timeline_position;
		this.save(cb);
	},
	removeTrack : function(){
		
	},
	updateTrack : function(){

	}
};

mongoose.model('Comments', commentsSchema);

