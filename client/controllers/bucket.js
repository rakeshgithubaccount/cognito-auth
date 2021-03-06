(function(angular, myApp) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('bucketController', ['$scope', '$state', '$stateParams', 'authService', function($scope, $state, $stateParams, authService) {
      $scope.bucketObjects = [];
      $scope.bucketName = $stateParams.bucketName;
      $scope.fetchingBucketContentComplete = false;
      // console.log($stateParams);

      // console.log('bucketController');

      $scope.listS3BucketContent = function() {
        var resultPromise = authService.getS3BucketObjects($scope.bucketName);
        resultPromise.then(function(result) {
          console.log('SUCCESS');
          console.log(result);
          $scope.bucketObjects = result.data.Contents;
          $scope.fetchingBucketContentComplete = true;
        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      };

      $scope.viewObject = function(bucketObject) {
        $state.go('displayImage', {'bucketName': $scope.bucketName, 'fileName': bucketObject.Key});
        // var resultPromise = authService.downloadObject($scope.bucketName, bucketObject.Key);
        // resultPromise.then(function(result) {
        //   console.log(result);
        // }, function(err) {
        //   console.error('Failed: ' + (err.data.message || err.data));
        // });
      };

      $scope.deleteObject = function(bucketObject) {
        var resultPromise = authService.deleteS3BucketObject($scope.bucketName, bucketObject.Key);
        resultPromise.then(function(result) {
          console.log('SUCCESS');
          console.log(result);
          $scope.listS3BucketContent();
        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      }

      $scope.listS3BucketContent();

  }]);
})(window.angular);
