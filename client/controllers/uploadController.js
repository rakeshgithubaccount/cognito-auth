(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('uploadController', function($scope, $state, authService) {

     // $scope.filename = {};
      $scope.upload = function() {
          var resultPromise = authService.uploadToBucket($scope.file);
          resultPromise.then(function(result) {
            console.log('Successfully logged in');
          }, function(err) {
            console.error('Failed: ' + (err.data.message || err.data));
          });
      }
  });
})(window.angular);