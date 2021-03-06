var mongoose = require("mongoose");
var crypto = require("crypto");

var Schema = mongoose.Schema;

var oAuthTypes = [
					'facebook',
					'google',
					'twitter',
					'github',
					'linkedin'
];

//helper for validation
var validatePresenceOf = function (value) {
  return value && value.length;
};

/*
*  Define user schema here
*/

var userSchema = new Schema({
	name : {type: String, default: ''},
	email: {type: String,default: ''},
	username: {type: String,default: ''},
	authToken: {type: String,default: ''},
	provider : {type: String,default:''},
	hashed_password: {type: String,default:''},
	salt: {type: String,default:''},
	facebook : {},
	twitter: {},
	github: {},
	linkedin: {},
	google: {}
});

/*
* Virtuals
*/
userSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() { return this._password });


/**
* validations of userSchema
*/
userSchema.path('name').validate(function (name) {
  if (this.skipValidation()) return true;
  return name.length;
}, 'Name cannot be blank');

userSchema.path('email').validate(function (email) {
  if (this.skipValidation()) return true;
  return email.length;
}, 'Email cannot be blank');

userSchema.path('email').validate(function (email, fn) {
  var User = mongoose.model('User');
  if (this.skipValidation()) fn(true);

  // Check whether email id is modified or is a new user
  if (this.isNew || this.isModified('email')) {
    User.find({ email: email }).exec(function (err, users) {
      fn(!err && users.length === 0);
    });
  } else fn(true);
}, 'Email already exists');

userSchema.path('username').validate(function (username) {
  if (this.skipValidation()) return true;
  return username.length;
}, 'Username cannot be blank');

userSchema.path('hashed_password').validate(function (hashed_password) {
  if (this.skipValidation()) return true;
  return hashed_password.length && this._password.length;
}, 'Password cannot be blank');

//add methods to user

userSchema.methods = {
   authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  makeSalt: function () {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  },
  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
  skipValidation: function() {
    return ~oAuthTypes.indexOf(this.provider);
  }
};

//adding a load fucntion
userSchema.statics = {
  load: function (options, cb) {
    options.select = options.select || 'name username';
    this.findOne(options.criteria)
      .select(options.select)
      .exec(cb);
  }
}

mongoose.model('User', userSchema);
