'use strict';

angular.
    module('usersList').component('postsList', {
        templateUrl: 'posts-list/posts-list.template.html',
        bindings: {userId: '@'},
        controller: ['$http', function postsListController($http){
            let self = this;

            $http.get('posts/posts.json').then(response => {
                self.posts = response.data;
            });
        }]
    })