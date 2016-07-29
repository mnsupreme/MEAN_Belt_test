app.controller('ControllerNames(plural-capital naming convention)', ["$scope", 'friendFactory', '$routeParams', '$localStorage', '$location', function($scope, friendFactory, $routeParams, $localStorage, $location){
		

		$scope.function=Factory.function($routeParams, function(){
			console.log('function successful')
		})

	}])
