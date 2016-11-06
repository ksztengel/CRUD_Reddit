'use strict'
app.controller('OnePostController', function($scope, PoloService, $routeParams, $location) {


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
})
