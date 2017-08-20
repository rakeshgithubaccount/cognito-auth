(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
    myApp.directive('signin', function() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/signin.html',
            controller: 'signinController'
        };
    });
})(window.angular);
