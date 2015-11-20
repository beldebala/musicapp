var mongoose = require("mongoose");

//adding album schema
var Schema = mongoose.Schema;

var followingSchema = new Schema({
	following_user_id : {type: String, default: ''},
	followed_user_id : {type: String, default: ''}
});
//validations
followingSchema.path('following_user_id').required(true, 'Need to Follow some one.');
followingSchema.path('followed_user_id').required(true, 'Need Follower user.');
//albumSchema.path('body').required(true, 'Album body cannot be blank');

mongoose.model('Following', followingSchema);

