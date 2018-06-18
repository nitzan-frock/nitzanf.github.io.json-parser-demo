'use strict';

angular.
    module('myApp').component('usersList', {
        templateUrl: 'users-list/users-list.template.html',
        controller: ['$http', function usersListController($http) {
            const self = this;

            self.username = 'nitzan';

            $http.get('users/users.json').then(response => {
                self.users = response.data;
            });
        }]
    });