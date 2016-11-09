app.controller('AuthController', function($scope, $cookies, UserService, $location) {


  $scope.userObj = {}

  $scope.signup = function(obj) {
    console.log("form", obj);
    UserService.signup(obj).then(function(response) {
        console.log("response", response);

    })
  }

  $scope.login = function(obj) {
    UserService.login(obj).then(function(response) {
  
    })
  }

})
