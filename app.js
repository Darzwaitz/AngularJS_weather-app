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
            $resource('http://api.openweathermap.org/data/2.5/forecast/?q=dublin&cnt=2&APPID=3074798bebbc48aa3f502c48f6b00ad4' , {
                callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP'}});
        $scope.weatherResult = $scope.weatherAPI.get({ 
            q: $scope.city, cnt: 2
        });
        
        // convert temp value to fahrenheit
        $scope.convertToFahrenheit = function(degK) {
            return Math.round((1.8 * (degK - 273) + 32));
        }
        
}]);