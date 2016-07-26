console.log('user model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var UserSchema = new mongoose.Schema({
  name: String,
}, {timestamps: true });
// register the schema as a model
var User = mongoose.model('User', UserSchema);
