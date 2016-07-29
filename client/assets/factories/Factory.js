app.factory('defaultFactory (camel case singular)', ['$http', function($http){
  console.log("Factory loaded!");
  var factory={};
  
  	factory.function = function(passin, callback){
  		$http.get('/route', passin).then(callback)
  	}
  return factory
}])

