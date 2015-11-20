var mongoose = require("mongoose");
var Tracks = mongoose.model("Tracks");
exports.index = function (req, res) {
  res.render('home/index', {
    title: 'My Test App'
  });
};

exports.test = function(req,res){
  var track = new Tracks({
	user_id : "1234",
	album_id : "2345",
	title : "This is title",
	description : "This is description",
	track_filename : "this is filename"
  });
  track.save();
  var data = '<h1>hello world</h1>';
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
};