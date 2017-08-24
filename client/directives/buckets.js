(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.directive('buckets', function() {
    function link(scope, element, attrs) {
      console.log('bucket directive');
    }

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'partials/buckets.html',
        controller: 'bucketsController',
        link: link
    };
  });
})(window.angular);
