console.log('server controller');
var mongoose = require('mongoose');
var name_of_model = mongoose.model('name of model');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function PluralNamingConventionCamelCase(){

  
  // enter functions here
  this.function = function(req,res){
    Model.find({_id: req.params.id}, function(err,result){
      if(err){
        console.log(err)
        return
      }
      res.json(result)
    })
  }

  this.find_or_create = function(req,res){       //what your inserting    //configuration object: upsert creates a new creates a new object
    Model.findOneAndUpdate({_id: req.params.id}, eq.body.name, {upsert: true, 'new':true}, function(err, user){
      if(err){
        console.log(err)
        return
      }
      res.json(user)
    }
  }
}
module.exports = new PluralNamingConventionCamelCase(); // what does this export?
   
//creating child objects in a one to many relation ship

/* this.create = function(req,res){
    console.log('server controller create child fired', req.body )
    ParentModel.findOne({_id: req.body.parent_id}, function(err, parent){
      if(err){
        console.log(err)
        return
      }
      console.log('pushing child to parent', parent)
      var new_child =  {
        text:req.body.text,
        description:req.body.description,
        category:req.body.category,
        _parent:req.body.parent_id
      };

      ChildModel.create(new_topic, function(err, child){
        if(err){
          console.log(err)
          return
        }
        parent._child.push(child)
        parent.save(function(err){
          if(err){
            console.log(err)
            return
          }
          console.log('child added to parent')
          res.json(child)
        })
      })
    })
  }*/