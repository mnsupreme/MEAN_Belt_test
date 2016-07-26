var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
	.when('/',{
            templateUrl: 'partials/login.html',
            controller: ''
        })
        .when('/show/:id',{
            templateUrl: 'partials/question.html',
            controller: ''
        })
        .when('/new/question', {
        	templateUrl: 'partials/new_question.html',
        	controller: ''
        })
        .when('/new/answer',{
        	templateUrl: 'partials/new_answer.html',
        	controller: ''
        })
        .when('/home',{
            templateUrl: 'partials/question_list.html',
            controller: ''
        })
        .otherwise({
          redirectTo: '/'
        });

});