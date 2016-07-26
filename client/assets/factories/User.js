app.factory('userFactory', ['$http', function($http){
  console.log("user factory loaded!");
  var factory={};

  	factory.current_user;

  	factory.login = function(name,callback){
      console.log("userFactory.login fired: ", name)
  		$http.post('/login', name).then(function(result){
        console.log("callback from factory login", result);
  			factory.current_user = result.data;
  			callback()
  		})
  	}

    factory.logout = function(){
      factory.current_user=''
    }

  return factory
}])

