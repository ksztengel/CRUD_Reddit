'use strict'
app.controller('AllController', function($scope, $cookies, PoloService, $location, $rootScope) {

    $scope.view = {}
    PoloService.all().then(posts => {
        $scope.posts = posts.data

    })

    $rootScope.loggedInUser = {}

    $rootScope.checkCookies = function() {
        if ($cookies.getObject('login')) {
            console.log('yes there are cookies');
            $scope.cookies = $cookies.getObject('login')
            console.log($scope.cookies);
            $rootScope.loggedInUser.id = $scope.cookies.data.id
            $rootScope.loggedInUser.username = $scope.cookies.data.username;
        } else {

        }
    }

    $rootScope.checkCookies()

    if (!$cookies.getObject('login')) {
        $scope.error = "You must be logged in to post!"
    } else {
        $scope.submitNew = function() {
            PoloService.new($scope.post).then(newPost => {
                $scope.posts.push($scope.post),
                    $scope.post = {},
                    $scope.postForm.$setPristine(),
                    $scope.newPost = {}

            })
        }
    }
    $scope.upVote = function(post) {
        post.votes += 1
        PoloService.edit(post, function() {})

    }

    $scope.downVote = function(post) {
        post.votes -= 1
        PoloService.edit(post, function() {})

    }

    $scope.search = ""

})
