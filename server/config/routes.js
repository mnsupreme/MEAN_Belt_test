console.log('server routes')

var variable = require('../controllers/(name of controller).js')
module.exports = function(app){
  app.get('/route', variable.function);
  app.get('/', );
  app.post('/', );
  app.put('/', );
  app.delete('/', );
}