"use strict";

var app = angular.module("MusicHistoryApp", ["ngRoute"]);

// let isAuth = (authFactory) => new Promise((resolve, reject) => {
//     if (authFactory.isAuthenticated()) {
//         resolve();
//         return true;
//     } else {
//         reject();
//         return false;
//     }
// });

app.config(function($routeProvider) {
    $routeProvider
        .when("/splash", {
            templateUrl: "partials/splash.html",
            controller:  "songViewCtrl"
        })
        .otherwise("/splash");
});


// app.run(($location, $rootScope) => {
//     let brushingDbRef = new Firebase("https://tooth-brushing.firebaseio.com/");
//     brushingDbRef.unauth();
//
//     brushingDbRef.onAuth(authData => {
//         if(!authData) {
//             $location.path("/splash");
//         }
//     });
// });
