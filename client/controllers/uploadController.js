(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('uploadController', ['$scope', '$state', '$http', 'authService', 'Upload', function($scope, $state, $http, authService, Upload) {

      $scope.upload = function() {
          Upload.upload({
              url: '/cognito/uploadFile', //webAPI exposed to upload the file
              data: {file:$scope.file} //pass file as data, should be user ng-model
          }).then(function (resp) { //upload function returns a promise
              console.log(resp);
              if(resp.data.ETag) {
                console.log('file uploaded Successfully');
                $scope.message = 'file uploaded Successfully';
              }
          }, function (resp) { //catch error
              console.log(resp);
              $scope.message = 'error occurred while uploading';
          }, function (evt) {
              console.log(evt);
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
              // vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
          });
      };
  }]);
})(window.angular);
