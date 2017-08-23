'use strict';

var myApp = angular.module('AWS_POC');
myApp.directive('file', function() {
  return {
    restrict: 'AE',
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.$parent.file = file;
      });
    }
  };
});
