(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.directive('buckets', function() {
    function link(scope, element, attrs) {
      element.on('$destroy', function() {
        //
      });
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
