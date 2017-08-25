(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('uploadController', ['$scope', 'authService', function($scope, authService) {
      $scope.showForm = true;
      $scope.bucketName = 'rakesh-s3-bucket'
      $scope.upload = function() {
        var resultPromise = authService.uploadObjectToS3Bucket($scope.file, $scope.bucketName);
        resultPromise.then(function(result) {
          console.log('file uploaded Successfully');
          console.log(result);
          $scope.message = 'file uploaded Successfully';
          $scope.showForm = false;
        }, function(err) {
          console.log(err);
          $scope.message = 'error occurred while uploading';
        });
      };
  }]);
})(window.angular);
