'use strict';

angular.
    module('myApp').component('post', {
        templateUrl: 'posts-list/posts-list.template.html',
        bindings: {post: '<'},
        controller: ['$http', function postController($http){
            let self = this;
        }]
    });