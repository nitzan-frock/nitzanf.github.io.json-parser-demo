'use strict';

angular.
    module('myApp').component('postsList', {
        templateUrl: 'posts-list/posts-list.template.html',
        bindings: {
            posts: '<'
        },
        controller: ['$http', function postsListController($http){
            let self = this;

            console.log(self.posts);
        }]
    });