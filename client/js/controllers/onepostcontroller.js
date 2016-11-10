'use strict'
app.controller('OnePostController', function($scope, $cookies, PoloService, $routeParams, $location, $rootScope) {

    $cookies.get('login')

    var id = $routeParams.id
    PoloService.one(id).then(results => {
        $scope.onePost = results.data

    })

    $scope.someFunction = function(id) {
        if ($rootScope.loggedInUser.id == $scope.onePost.users_id) {
            PoloService.delete(id).then(results => {
                $location.url('/')
            })
        } else {
            return $scope.error = "You are not the author of the post!"
        }
    }

    $scope.submitEdit = function() {
        if ($rootScope.loggedInUser.id == post.users_id) {
            const editPost = $scope.onePost
            PoloService.edit(editPost).then(results => {
                $location.url('/')
            })

        } else {
            return $scope.error = "You are not the author of the post!"
        }
    }

    $scope.view = {}
    PoloService.allComments(id).then(comments => {
        $scope.comments = comments.data

    })

    //not editing and deleting comments yet
    if (!$cookies.get('login')) {
        $scope.error = "You must be logged in to comment!"
    } else {
        $scope.submitComment = function() {
            console.log($scope.onePost.id);
            console.log($scope.comment);
            $scope.comment.posts_id = $scope.onePost.id
                //same for users_d = cookies.id
            PoloService.comment($scope.comment).then(newComment => {
                $scope.comments.push($scope.comment),
                    $scope.comment = {},
                    $scope.commentForm.$setPristine()

            })
        }
    }

})
