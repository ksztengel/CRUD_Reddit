'use strict'
app.controller('OnePostController', function($scope, PoloService, $routeParams, $location) {


    var id = $routeParams.id
    PoloService.one(id).then(results => {
        $scope.onePost = results.data

    })

    // $scope.someFunction = function(id) {
    //     BucaneerService.delete(id).then(results => {
    //         $location.url('/')
    //
    //     })
    // }
    //
    // $scope.submitEdit = function() {
    //     const editBucaneer = $scope.oneBucaneer
    //     BucaneerService.edit(editBucaneer).then(results => {
    //         console.log('edit', $scope.editBucaneer);
    //         $location.url('/')
    //
    //     })
    // }
})
