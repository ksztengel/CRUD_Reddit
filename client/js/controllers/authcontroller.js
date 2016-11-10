app.controller('AuthController', function($scope, $cookies, UserService, $location) {


    $scope.userObj = {}

    $scope.signup = function(obj) {
        UserService.signup(obj).then(function(response) {

        })
    }

    $scope.login = function(obj) {
        UserService.login(obj).then(function(response) {

        })
    }

})
