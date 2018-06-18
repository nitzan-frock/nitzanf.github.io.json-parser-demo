'use strict';

angular.
    module('myApp').component('user', {
        templateUrl: 'users-list/user/user.template.html',
        bindings: {
            user: '<',
            username: '<'
        },
        controller: ['$http', function userController ($http) {
            const self = this;

            self.$onChanges = function (changes) {
                if (changes.username) {
                    this.username = angular.copy(changes.username);
                }
                //self.name = self.username;
                self.showPosts = false;
                // self.posts = [
                //     {
                //         "userId": 1,
                //         "id": 1,
                //         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                //         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                //     },
                //     {
                //         "userId": 1,
                //         "id": 2,
                //         "title": "qui est esse",
                //         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                //     },
                //     {
                //         "userId": 1,
                //         "id": 3,
                //         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                //         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                //     }
                // ];
            }            
            self.printName = function () {
                console.log(self.username);
            }
            self.userClicked = function () {
                console.log(self.user._id + ' clicked');
                self.showPosts = !self.showPosts;
            }

            // function _getPosts () {
            //     const userIndex = self.user.index + 1;
            //     $http.get('posts/posts-user' + userIndex + '.json').then(response => {
            //         self.posts = response.data;
            //     });
            // }
        }]
    });