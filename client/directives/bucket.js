(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.directive('bucket', function() {
    function link(scope, element, attrs) {
      element.on('$destroy', function() {
        //
      });
    }

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'partials/bucket.html',
        controller: 'bucketController',
        link: link
    };
  });
})(window.angular);
