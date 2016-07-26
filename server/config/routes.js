console.log('server routes')

var Questions = require('../controllers/Questions.js')
var Answers = require('../controllers/Answers.js')
var Users = require('../controllers/Users.js')
module.exports = function(app){
  app.post('/login', Users.login);
  app.post('/new_question', Questions.create );
  app.get('/show/:id', Questions.show );
  app.post('/search', Questions.search);
  app.get('/get', Questions.get)
  app.post('/new_answer', Answers.create);
  app.get('/like/:id', Answers.like);
}