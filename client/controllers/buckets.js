(function(angular, myApp) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('bucketsController', ['$scope', '$state', '$window', 'authService', function($scope, $state, $window, authService) {
      $scope.bucketList = [];

      $scope.signout = function() {
        var resultPromise = authService.signoutFromCognito();
        resultPromise.then(function(result) {
          console.log('logout: ' + result.data);
          $state.go("signin");
        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      };

      $scope.listS3Buckets = function() {
        var resultPromise = authService.getS3Buckets();
        resultPromise.then(function(result) {
          console.log('SUCCESS');
          console.log(result);
          $scope.bucketList = result.data.Buckets;
        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      }

      $scope.showBucket = function(bucket) {
        console.log('showBucket');
        $state.go('s3Bucket', {'bucketName': bucket.Name});
      }

  }]);
})(window.angular);
