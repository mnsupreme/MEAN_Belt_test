app.controller('UsersController', ["$scope", 'userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location){
	console.log("UsersController loaded");

	$scope.currentUser = userFactory.current_user;

	$scope.login = function(user){
		userFactory.login(user, function(){
			console.log("Callback from userFactory.Login fired");
			$scope.currentUser = userFactory.current_user
			$location.url('/home')
		})
	}

}])	
