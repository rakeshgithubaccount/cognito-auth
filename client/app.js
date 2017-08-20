(function(angular) {
    'use strict';

    var myApp = angular.module('AWS_POC', ['ui.router']);
    window.myApp = myApp;

    myApp.config(function($stateProvider) {
        var signinState = {
            name: 'signin',
            url: '/signin',
            templateUrl: 'templates/signin.html',
            controller: 'signinController'
        };

        var signupState = {
            name: 'signup',
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller: 'signupController'
        };

        var s3BucketsState = {
            name: 's3Buckets',
            url: '/s3Buckets',
            templateUrl: 'templates/buckets.html',
            controller: 'bucketsController'
        };

        var s3BucketState = {
            name: 's3Bucket',
            url: '/s3Buckets/s3Bucket/:bucketName',
            templateUrl: 'templates/bucket.html',
            controller: 'bucketController'
        };

        $stateProvider.state(signupState);
        $stateProvider.state(signinState);
        $stateProvider.state(s3BucketsState);
        $stateProvider.state(s3BucketState);
    });
})(window.angular);
