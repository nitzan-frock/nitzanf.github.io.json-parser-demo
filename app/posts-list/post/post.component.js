'use strict';

angular.
    module('myApp').component('post', {
        templateUrl: 'posts-list/post/post.template.html',
        bindings: {post: '<'},
        controller: ['$http', function postController($http){
            let self = this;

            self.$onChanges = function (changes) {
                self.post = angular.copy(changes.post.currentValue);
                self.post.title = self._capitalizeFirstLetter(self.post.title);
            };

            self._capitalizeFirstLetter = function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
        }]
    });