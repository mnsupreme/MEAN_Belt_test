app.factory('questionFactory', ['$http', function($http){
  console.log("Factory loaded!");
  var factory={};

  factory.create= function(question, callback){
  	$http.post('/new_question',question).then(callback)
  }

  factory.show = function(id, callback){
  	$http.get('/show/'+id).then(callback)
  }

  factory.search = function(text, callback){
  	$http.post('/search', text).then(callback)
  }

  factory.get = function(callback){
  	$http.get('/get').then(callback)
  }
  
  return factory
}])

