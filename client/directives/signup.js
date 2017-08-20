(function(angular) {
  'use strict';
    var myApp = angular.module('AWS_POC');
    myApp.directive('signup', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/signup.html',
            controller: 'signupController'
        };
    });
})(window.angular);
