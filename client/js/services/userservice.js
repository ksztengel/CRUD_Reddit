app.service('UserService', function($http, $location, $cookies, $rootScope) {
    return {
        signup: function(userObj) {
            return $http.post('/userapi/signup', userObj)
                .then(function(response) {
                    if (response.data.userExists) {

                        $rootScope.userExists = response.data.userExists;
                    } else {

                        $cookies.putObject('login', response)
                        $location.url('/')
                    }
                })
        },
        login: function(userObj) {
            return $http.post('/userapi/login', userObj)
                .then(function(response) {
                    if (response.data.badPassword) {
                        $rootScope.badPassword = response.data.badPassword;
                    } else {

                        $cookies.putObject('login', response)
                        $location.url('/')
                    }
                })
        },
        logout: function() {
            $cookies.remove('login')

            $location.url('/signup')
        }

    }
})
