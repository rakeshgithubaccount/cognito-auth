(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.directive('displayImage', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'partials/display-image.html',
        controller: 'displayImageController'
    };
  });
})(window.angular);
