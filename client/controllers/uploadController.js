(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('uploadController', ['$scope', '$state', '$http', 'authService', function($scope, $state, $http, authService) {
$scope.showForm = true;
      $scope.upload = function() {

          var config = {
             method: 'POST',
             url: '/cognito/uploadFile',
             data: {'file': $scope.file},
             headers: {'Content-Type': undefined},
             transformRequest: [function (data) {
                var formData = new window.FormData(), key;
                data = data || config.fields || {};
                if (config.file) {
                  data.file = config.file;
                }
                for (key in data) {
                  if (data.hasOwnProperty(key)) {
                    var val = data[key];
                      // addFieldToFormData(formData, val, key);
                    formData.append(key, data.file, data.file.name);
                  }
                }
                return formData;
              }]
          }

          $http(config).then(function(result) {
              console.log(result);
              if(result.data.ETag) {
                console.log('file uploaded Successfully');
                $scope.message = 'file uploaded Successfully';
                $scope.showForm = false;
              }
          }, function(err) {
              console.log(err);
              $scope.message = 'error occurred while uploading';
          });
      };
  }]);
})(window.angular);
