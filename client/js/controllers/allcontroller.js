'use strict'
app.controller('AllController', function($scope, PoloService, $location) {

    // $scope.sort = '-votes'

    $scope.view = {}
    PoloService.all().then(posts => {
        $scope.posts = posts.data

    })

    $scope.submitNew = function() {
        PoloService.new($scope.post).then(newPost => {
            $scope.posts.push($scope.post),
                $scope.post = {},
                $scope.postForm.$setPristine(),
                $scope.newPost = {}
                // $location.url('/')

        })
    }

    $scope.upVote = function(post) {
        post.votes += 1
        PoloService.edit(post, function(){})

    }

    $scope.downVote = function(post) {
        post.votes -= 1
        PoloService.edit(post, function(){})

    }

    $scope.search = ""

  })
