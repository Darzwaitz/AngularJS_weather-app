// module
let weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

//routez
weatherApp.config(function ($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/home.html',
        controller: 'homeController'

    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'

    })
});

//controllerz
weatherApp.controller('homeController',['$Scope', function($Scope) {

}]);

weatherApp.controller('forecastController', ['$Scope', function ($Scope) {

}]);