var app = angular.module('reddit',['ngRoute', 'ngAnimate','ngCookies'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/allposts.html',
        controller: 'AllController'
      })
      .when('/onepost/:id', {
        templateUrl: '../views/onepost.html',
        controller: 'OnePostController'
      })
      .when('/signup', {
    templateUrl: '../views/signup.html',
    controller: 'AuthController'
  })

});
