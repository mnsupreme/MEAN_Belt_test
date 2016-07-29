var app = angular.module('app', ['ngRoute', 'ngStorage']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
            templateUrl: 'partials/',
            controller: ''
        })
        .when('/edit/:id',{
            templateUrl: 'partials/',
            controller: ''
        })
        .when('/new', {
            templateUrl: 'partials/',
            controller: ''
        })
        .when('/show/:id',{
            templateUrl: 'partials/',
            controller: ''
        })
        .otherwise({
          redirectTo: '/'
        });

}); 


