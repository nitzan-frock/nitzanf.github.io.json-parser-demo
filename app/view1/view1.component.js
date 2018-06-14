'use strict';

angular.
module('view1').component('view1', {
    templateUrl: 'view1/view1.template.html',
    controller: function view1Controller () {
         var self = this;
         self.name = 'Name';
    }
});