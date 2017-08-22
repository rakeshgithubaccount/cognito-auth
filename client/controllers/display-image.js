(function(angular, myApp) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('displayImageController', ['$scope', '$state', '$stateParams', 'authService', function($scope, $state, $stateParams, authService) {
      $scope.bucketName = $stateParams.bucketName;
      $scope.fileName = $stateParams.fileName;
      console.log($stateParams);
      // console.log(getFileData);

      $scope.viewObject = function() {
        var resultPromise = authService.downloadObject($scope.bucketName, $scope.fileName);
        resultPromise.then(function(result) {
          // console.log(result);
          var b64Data = _arrayBufferToBase64(result.data.Body.data);
          $scope.image = b64Data;

          // var canvas = document.getElementById('my-canvas');
          // var context = canvas.getContext('2d');
          // var img = new Image();
          //
          // img.onload = function() {
          //   context.drawImage(this, 0, 0, canvas.width, canvas.height);
          // }
          //
          // img.src = 'data:image/JPEG;base64,' + b64Data;

        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      }

      function _arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
      }
  }]);
})(window.angular);
