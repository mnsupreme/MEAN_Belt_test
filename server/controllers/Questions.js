console.log('question server controller');
var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var Question = mongoose.model('Question');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function QuestionsController(){

  this.create = function(req,res){
    Question.create({text:req.body.text, description:req.body.description, name:req.body.name}, function(err,result){
      if(err){
        console.log('error in creating new question')
        return
      }
      res.json(result)
    })
  }
  
  this.show = function(req,res){
    Question.findOne({_id:req.params.id}).populate('answers').exec(function(err,search){
      if(err){
        console.log('error fetching question')
        return
      }
      res.json(search)
    })
  }

  this.search = function(req,res){
    Question.find({name:{$regex:req.body.name , $options: i}}, function(err, results){
      if(err){
        console.log('no matches')
        return
      }
      res.json(results)
    })

  }
}
module.exports = new QuestionsController(); // what does this export?

//populating tables with foreighn keys
/*app.post('/posts/:id', function (req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._post = post._id;
        // now save both to the DB
        comment.save(function(err){
                post.comments.push(comment);
                post.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          res.redirect('/');
                     }
                 });
         });
    });
 });*/