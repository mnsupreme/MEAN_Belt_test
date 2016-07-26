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
    console.log("Users.login fired: ", req.body);
    User.findOneAndUpdate({name: req.body.name}, req.body, {upsert: true, 'new':true}, function(err, user){
      console.log("User.find callback", err, user);
      if(err){
        console.log('something went wrong')
        return res.json(err);
      }
      res.json(user);

      // for(var index in users){
      //   if(req.body.name == index.name){
      //     res.json(index)
      //   }
      //   else{
      //     User.Create({name:req.body.name}, function(err, new_user){
      //       if(err){
      //         console.log('error creating user')
      //         return
      //       }
      //       console.log('user created successfully' , new_user)
      //       res.json(new_user)
      //     })
      //   }
      // }
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