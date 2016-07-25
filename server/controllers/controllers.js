console.log('server controller');
var mongoose = require('mongoose');
var name_of_model = mongoose.model('name of model');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function PluralNamingConventionCamelCase(){

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var hour = today.getHours();
var minutes = today.getMinutes();
var ampm;

  function getTime(){

  var date;

  if(mm<10) {
      mm='0'+mm
  } 

  if(hour>12){
    hour=hour%2
    ampm='pm'
  }
  else{
    ampm ='am'
  }

  date = mm+'/'+dd+'/'+yyyy+' '+hour+' '+minutes+' '+ampm;
  return date;
}
  
  // enter functions here
}
module.exports = new PluralNamingConventionCamelCase(); // what does this export?

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