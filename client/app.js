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

        var dashboard = {
            name: 'dashboard',
            url: '/dashboard',
            templateUrl: 'templates/buckets.html',
            controller: 'bucketsController'
        };
        var list = {
            name: 'list',
            parent: dashboard,
            url: '/list',
            templateUrl: 'partials/list.html'
           
        };
        var upload = {
            name: 'upload',
            parent: dashboard,
            url: '/upload',
            templateUrl: 'partials/upload.html'
           
        };
        var deleteImage = {
            name: 'delete',
            parent: dashboard,
            url: '/delete',
            templateUrl: 'partials/delete.html'
            
        };

        var s3BucketState = {
            name: 's3Bucket',
             parent: dashboard,
            url: '/s3Buckets/s3Bucket/:bucketName',
            templateUrl: 'templates/bucket.html',
            controller: 'bucketController'
        };

        $stateProvider.state(signupState);
        $stateProvider.state(signinState);
        $stateProvider.state(dashboard);
        $stateProvider.state(list);
        $stateProvider.state(upload);
        $stateProvider.state(deleteImage);
        
        $stateProvider.state(s3BucketState);
    });
})(window.angular);
