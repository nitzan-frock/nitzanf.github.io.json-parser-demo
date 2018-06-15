'use strict';

angular.
    module('myApp').component('usersList', {
        templateUrl: 'users-list/users-list.template.html',
        controller: ['$http', function usersListController($http) {
            var self = this;
            self.currentPosts = [];

            self.userClicked = function userClicked (user) {
                self.currentUser = user;
            }

            // self.getPosts = userIndex => {
            //     return new Promise((resolve, reject) => {
            //         $http.get('posts/posts-user' + userIndex + '.json').then(response => {
            //             if (response.status === 200) {
            //                 resolve(response.data);
            //             } else {
            //                 reject(response.statusText);
            //             }
            //         });
            //     });
            // }

            // self.userClicked = function userClicked(userId, index) {
            //     const userIndex = index + 1;
            //     const postsPromise = self.getPosts(userIndex);
            //     postsPromise
            //     .then(result => {self.currentPosts = result})
            //     .then(_result => { 
            //         console.log("show user:"+userId+" posts");
            //     })

            // };

            $http.get('users/users.json').then(response => {
                self.users = response.data;
            });


            //TODO: pull user's posts when a user is clicked on.
        }]
    });