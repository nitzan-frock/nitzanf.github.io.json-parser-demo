'use strict';

angular.
    module('myApp').component('usersList', {
        templateUrl: 'users-list/users-list.template.html',
        controller: ['$http', function usersListController($http) {
            var self = this;
            self.allUserPosts = [];
            self.currentPosts = [];

            self.isUserPostsCached = function isUserPostsCached (userIndex){
                self.allUserPosts.forEach(posts => {
                    let userId = posts[0].userId
                    if (userIndex === userId) {
                        return true;
                    }
                    return false;
                });
            }

            self.getUserPosts = function getUserPosts (userIndex) {
                $http.get('posts/posts-user' + userIndex +'.json').then(response => {
                    self.allUserPosts.push(response.data);
                    console.log(response.data);
                    return response.data;
                });
            }

            self.showPosts = function showPosts(index){
                let userIndex = index + 1;
                if (self.isUserPostsCached(userIndex)) {
                    self.currentPosts = self.allUserPosts.forEach(posts => {
                        return userIndex === posts[0].userId ? posts : null;
                    });
                } else {
                    self.currentPosts = self.getUserPosts(userIndex);
                }
                console.log(self.currentPosts);
            };

            $http.get('users/users.json').then(response => {
                self.users = response.data;
            });


            //TODO: pull user's posts when a user is clicked on.
        }]
    });