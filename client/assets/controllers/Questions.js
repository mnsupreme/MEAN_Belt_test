app.controller('QuestionsController', ["$scope", 'userFactory', '$routeParams', '$location', 'questionFactory', 'answerFactory', function($scope, userFactory, answerFactory, $routeParams, questionFactory, $location){
		$scope.currentUser = userFactory.current_user

		questionFactory.get(function(result){
			$scope.list=result
		})

		$scope.create= questionFactory.create(question, function(){
			console.log('question created successfully')
			questionFactory.get(function(result){
			$scope.list=result
		})
	})

		$scope.show = questionFactory.show($routeParams, function(result){
			$scope.current_question = result;
			$location.url('/show'+ $routeParams)
		})

		$scope.create_answer= function(answer){
		questionFactory.show($routeParams, function(result){
			$scope.current_question = result;
		})
		answer.id = $routeParams
		answerFactory.create(answer, $routeParams, function(){
		$location.url('/home')
	})
	}

	$scope.like = answerFactory.like($routeParams)
		


		

	}])