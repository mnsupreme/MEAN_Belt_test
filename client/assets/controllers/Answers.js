app.controller('AnswersController', ["$scope", 'userFactory', '$routeParams', '$location', 'answerFactory', function($scope, userFactory, $routeParams, $location, answerFactory){
	$scope.currentUser = userFactory.current_user	
	
	$scope.create= answerFactory.create(answer, function(result){
		$location.url('/home')
	})

	$scope.like = answerFactory.like($reqParams)
		

	}])