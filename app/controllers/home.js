var mongoose = require("mongoose");
var Tracks = mongoose.model("Tracks");
var Album = mongoose.model("Album");
exports.index = function (req, res) {
  res.render('home/index', {
    title: 'My Test App'
  });
};

exports.login = function (req, res) {
  res.render('home/login', {
    title: 'Login'
  });
};

exports.signup = function (req, res) {
  res.render('home/signup', {
    title: 'Login'
  });
};


exports.test = function(req,res){
 

     if (!req.body) return res.sendStatus(400);
  var album = new Album({
   user_id : "1234",
   title : "my album",
   img_filename : "kumari 21 f"
  });

  album.save(); 
  console.log("request ",req.body);
  album.addTracks({

  title : "This is title",
  description : "This is description",
  track_filename : "this is filename"
  })

  
  var data = '<h1>hello world</h1>';
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
};

