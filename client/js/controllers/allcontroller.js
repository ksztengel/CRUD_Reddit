'use strict'
app.controller('AllController', function($scope, PoloService) {


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
                console.log($scope.post);
        })
    }

  })
