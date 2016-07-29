console.log('server model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models
var GenericSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username:{
  	type:String
  	validate:{ //make this an array of objects for multiple validation objects
  		validator: function( value ){
  			//validation function goes here
  		},
  	message:'failure message goes here'
  	}

  },
  created:String
  _association_parent: {type: Schema.Types.ObjectId, ref: 'name_of_foreighn_model'},//one to many where this is the one
  _association_children:[{type: Schema.Types.ObjectId, ref: 'name_of_foreighn_model'}]//one to many where this is the many
}, {timestamps: true });
// register the schema as a model
var name_of_model = mongoose.model('name of model', GenericSchema);

