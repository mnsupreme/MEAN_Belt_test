console.log('server routes')

var Question = require('../controllers/Questions.js')
var Answer = require('../controllers/Answers.js')
var User = require('../controllers/Users.js')
module.exports = function(app){
  app.post('/login', User.login);
  app.post('/new_question', Question.create );
  app.get('/show/:id', Question.show );
  app.post('/search', Question.search);
  app.get('/get', Question.get)
  app.post('/new_answer', Answer.create);
  app.get('/like/:id', Answer.like);
}