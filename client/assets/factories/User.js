app.factory('userFactory', ['$http', function($http){
  console.log("user factory loaded!");
  var factory={};
  	
  	factory.login = function(name,callback){
  		$http.post('/login', name).then(function(result,callback){
  			factory.current_user = result
  			callback()
  		})
  	}

    factory.logout = function(){
      factory.current_user=''
    }

  return factory
}])

