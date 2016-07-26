app.factory('answerFactory', ['$http', function($http){
  console.log("Factory loaded!");
  var factory={};

  factory.create = function(answer, callback){
  	$http.post('/new_answer', answer).then(callback)
  }

  factory.like = function(id){
  	$http.get('/like/'+id)
  }
  
  return factory
}])

