(function(angular) {
  'use strict';
  var myApp = angular.module('AWS_POC');
  myApp.controller('signupController', ['$scope', 'authService', '$state', function($scope, authService, $state) {

      $scope.email = "";
      $scope.username = "";
      $scope.password = "";
      $scope.phone = "";

      $scope.confirmRegistrationForm = false;

      $scope.submitForm = function() {
        var userData = {
          'email' : $scope.email,
          'username' : $scope.username,
          'password' : $scope.password,
          'phone' : $scope.phone
        };

        var resultPromise = authService.signupToCognito(userData);
        resultPromise.then(function(result) {
          console.log('signup success');
          $scope.confirmRegistrationForm = true;
        }, function(err) {
          console.error('Failed: ' + (err.data.message || err.data));
        });
      };

      $scope.confirmRegistration = function() {
          var resultPromise = authService.confirmCognitoRegistration($scope.code);
          resultPromise.then(function(result) {
            $state.go("signin");
          }, function(err) {
            console.error('Failed: ' + (err.data.message || err.data));
          });
      }

  }]);
})(window.angular);
