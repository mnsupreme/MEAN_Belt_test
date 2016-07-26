console.log('answer server controller');
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question')
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function AnswersController(){

this.create = function(req,res){
  Question.findOne({_id:req.body.id}, function(err, question){
    if(err){
      console.log('error finding question to add answer to')
      return
    }
    var answer = {
                  text:req.body.text,
                  name:req.body.name,
                  description:req.body.description,
                  likes:0
                    }
      answer._question = question._id
      question.answers.push(answers)
      Answer.create(answer, function(err){
        if(err){
          console.log('error adding question')
          return
        }
        question.save(function(err){
          if(err){
            console.log('trouble updating question')
            return
          }
          question.populate('answers').exec(res.json(question))
        })
      })  
    })
}

this.like = function(req,res){
  Answer.findOneAndUpdate({_id:req.params.id}, {$inc:{likes:1}}, function(err, answer){
    if(err){
      console.log('trouble adding like')
      return
    }
    Answer.find({},function(err,list){
      if(err){
        console.log('error fetching results')
        return
      }
      res.json(list)
    })
  })
}
  
  // enter functions here
}
module.exports = new AnswersController(); // what does this export?

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