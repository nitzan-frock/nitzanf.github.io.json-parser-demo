'use strict';

// Declare app level module which depends on views, and components
angular.
module('myApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when('/view1', {
    template: '<view1></view1>'
  }).
  otherwise({redirectTo: '/view1'});
}]);
