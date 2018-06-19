'use strict';

angular.
    module('myApp').component('user', {
        templateUrl: 'users-list/user/user.template.html',
        bindings: {
            user: '<'
        },
        controller: ['$http', function userController ($http) {
            const self = this;

            self.$onInit = function () {
                self.showPosts = false;
            }

            self.userClicked = function () {
                console.log(self.user._id + ' clicked');
                self.showPosts = !self.showPosts;
                self._getPosts();
            }

            self._getPosts = function () {
                const userIndex = self.user.index + 1;
                if (!self.user.posts){
                    $http.get('posts/posts-user' + userIndex + '.json').then(response => {
                        self.user.posts = response.data;
                    });
                }
            }
        }]
    });