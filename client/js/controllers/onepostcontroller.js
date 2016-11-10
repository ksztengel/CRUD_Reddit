'use strict'
app.controller('OnePostController', function($scope, $cookies,PoloService, $routeParams, $location, $rootScope) {

      $cookies.get('login')

    var id = $routeParams.id
    PoloService.one(id).then(results => {
        $scope.onePost = results.data

    })

    $scope.someFunction = function(id) {
        PoloService.delete(id).then(results => {
            $location.url('/')

        })
    }

    $scope.submitEdit = function() {
        const editPost = $scope.onePost
        PoloService.edit(editPost).then(results => {
            $location.url('/')

        })
    }

    $scope.view = {}
    PoloService.allComments(id).then(comments => {
        $scope.comments = comments.data

    })
if (!$cookies.get('login')){
  $scope.error = "You must be logged in to commentt!"
}
else{
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
