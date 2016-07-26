console.log('user server controller');
var mongoose = require('mongoose');
var Schema =  mongoose.Schema;
var User = mongoose.model('User');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function UsersController(){

  
  // enter functions here

  this.login= function(req,res){
    User.find({}, function(err, users){
      if(err){
        console.log('error in fetching users')
        return
      }
      for(each in users){
        if(req.body.name == each.name){
          res.json(each)
        }
        else{
          User.Create({name:req.body.name}, function(err, new_user){
            if(err){
              console.log('error creating user')
              return
            }
            console.log('user created successfully' , new_user)
            res.json(new_user)
          })
        }
      }
    })
  }
}
module.exports = new UsersController(); // what does this export?

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