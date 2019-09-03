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

// servicez
weatherApp.service('cityService', function(){
    this.city = 'Dublin';
});

//controllerz
weatherApp.controller('homeController', ['$scope', 'cityService', 
    function ($scope, cityService) {

        $scope.city = cityService.city;

        // set initial value in text box and watch for change
        $scope.$watch('city', function(){
            cityService.city = $scope.city;
        });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource','cityService', 
    function ($scope, $resource, cityService) {

        $scope.city = cityService.city;

        $scope.weatherAPI =
            $resource('http://api.openweathermap.org/data/2.5/weather?q=dublin&APPID=3074798bebbc48aa3f502c48f6b00ad4' , {
                callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP'}});
        $scope.weatherResult = $scope.weatherAPI.get({ 
            q: $scope.city
        });
        
        console.log($scope.weatherResult);
        

}]);