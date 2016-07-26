var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
	.when('/',{
            templateUrl: 'partials/login.html',
            controller: 'UsersController'
        })
        .when('/show/:id',{
            templateUrl: 'partials/question.html',
            controller: 'QuestionsController'
        })
        .when('/new/question', {
        	templateUrl: 'partials/new_question.html',
        	controller: 'QuestionsController'
        })
        .when('/new/answer/:id',{
        	templateUrl: 'partials/new_answer.html',
        	controller: 'QuestionsController'
        })
        .when('/home',{
            templateUrl: 'partials/question_list.html',
            controller: 'QuestionsController'
        })
        .otherwise({
          redirectTo: '/'
        });

});