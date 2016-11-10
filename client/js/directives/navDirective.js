app.directive('ksNav', function() {
    return {
        restrict: 'E',
        templateUrl: '../../views/nav.html',
        controller: function($scope, UserService) {

            $scope.logout = function() {
                console.log('logout function fired!');
                UserService.logout()


            }
        }
    }
})
