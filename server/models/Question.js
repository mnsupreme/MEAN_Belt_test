console.log('question model');
var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
// build your friend schema and add it to the mongoose.models
var QuestionSchema = new mongoose.Schema({
  text:{
    type:String,
    min:[10, 'Answer must be at least 10 characters long'],
    required:true
  },
  description:String,
  name:{
    type:String,
    required:true
  },
  _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],//one to many where this is the one
});
// register the schema as a model
var Question = mongoose.model('Question', QuestionSchema);
