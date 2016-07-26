app.controller('UsersController', ["$scope", 'userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location){
	$scope.currentUser = userFactory.current_user
	
	$scope.login = userFactory(name, function(){
		$scope.currentUser = userFactory.current_user
		$location.url('/home')
	})


	}])	
