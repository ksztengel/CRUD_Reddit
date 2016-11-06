'use strict'
app.service('PoloService', function($http) {
    return {
        all: function() {
            return $http.get('../api/allposts');
        },

        one: function(id) {
            return $http.get(`/api/allposts/${id}`)
        },

        new: function(newPost) {

            return $http.post('/api/allposts', newPost);
        },

        edit: function(editPost) {
            var id = editPost.id
            return $http.put(`/api/allposts/${id}`, editPost);
        },

        delete: function(id) {
            return $http.delete(`/api/allposts/${id}`);
        }

    }

})
