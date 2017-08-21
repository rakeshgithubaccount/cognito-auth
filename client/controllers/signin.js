(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('signinController', ['$scope', '$state', 'authService', function($scope, $state, authService) {

      $scope.username = "";
      $scope.password = "";

      $scope.submitForm = function() {
          var resultPromise = authService.signinToCognito($scope.username, $scope.password);
          resultPromise.then(function(result) {
            console.log('Successfully logged in');
            $state.go("dashboard");
          }, function(err) {
            console.error('Failed: ' + (err.data.message || err.data));
          });
      }
  }]);
})(window.angular);
