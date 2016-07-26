console.log('answer model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var AnswerSchema = new mongoose.Schema({
  text:{
    type:String,
    mine:[5, 'Answer must be at least 5 characters long'],
    required:true
  },
  description:String,
  name:{
    type:String,
    required:true
  },
  likes:{
    type:Number,
    required:true
  },
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},//one to many where this is the one
});
// register the schema as a model
var Answer = mongoose.model('Answer', AnswerSchema);
