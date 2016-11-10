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
                  if (response.data.badPassword) {
                      console.log('response from serivice', response);
                      $rootScope.badPassword = response.data.badPassword;
                }
                else{
                  console.log('response from serivice', response);
                  $cookies.putObject('login', response)
                  $location.url('/')
                }
              })
        },
        logout: function() {
            $cookies.remove('login')
            // $rootScope.loggedInUser = {}
            $location.url('/signup')
        }

    }
})
