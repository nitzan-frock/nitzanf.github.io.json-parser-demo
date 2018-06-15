'use strict';

angular.
    module('myApp').component('postsList', {
        templateUrl: 'posts-list/posts-list.template.html',
        bindings: {
            user: '<'
        },
        controller: ['$http', function postsListController($http){
            let self = this;

            console.log(self.user);
            $http.get('posts/posts'+(self.user.index+1)+'.json').then(response => {
                self.posts = response.data;
            });
        }]
    })