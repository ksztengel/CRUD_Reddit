app.service('UserService', function($http, $location, $cookies, $rootScope) {
    return {
        signup: function(userObj) {
            return $http.post('/userapi/signup', userObj)
                .then(function(response) {
                    if (response.data.userExists) {
                        console.log('response from serivice', response);
                        $rootScope.userExists = response.data.userExists;
                    } else {
                        console.log('response from serivice', response);
                        $cookies.putObject('login', response)
                        $location.url('/')
                    }
                })
        },
        login: function(userObj) {
            return $http.post('/userapi/login', userObj)
                .then(function(response) {
                    $cookies.putObject('login', response)

                })
        },
        logout: function() {
            $cookies.remove('login')
            $location.url('/')
        }

    }
})
