(function(angular, myApp) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('bucketController', ['$scope', '$state', '$stateParams', 'authService', function($scope, $state, $stateParams, authService) {
      $scope.bucketObjects = [];
      $scope.bucketName = $stateParams.bucketName;
      console.log($stateParams);

      $scope.listS3BucketContent = function() {
        var resultPromise = authService.getS3BucketObjects($scope.bucketName);
        resultPromise.then(function(result) {
          console.log('SUCCESS');
          console.log(result);
          $scope.bucketObjects = result.data.Contents;
        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      }

      $scope.downloadObject = function(bucketObject) {
        var resultPromise = authService.downloadObject($scope.bucketName, bucketObject);
        resultPromise.then(function(result) {
          console.log(result);
        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      }
  }]);
})(window.angular);
