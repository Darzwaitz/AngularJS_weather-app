//controllerz
weatherApp.controller('homeController', ['$scope', '$location', 'cityService',
    function ($scope, $location, cityService) {

        $scope.city = cityService.city;

        // set initial value in text box and watch for change
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

        $scope.submit = function() {
            $location.path("/forecast");
        }

    }]);

weatherApp.controller('forecastController', ['$scope', 'cityService', 'weatherService',
    function ($scope,cityService, weatherService) {

        $scope.city = cityService.city;

        $scope.weatherResult = weatherService.GetWeather(
            //put cnt in here later after fix  to choose how many forecasts
            $scope.city
        );

        // convert temp value to fahrenheit
        $scope.convertToFahrenheit = function (degK) {
            return Math.round((1.8 * (degK - 273) + 32));
        }

        $scope.convertToDate = function (dt_txt) {
            return new Date(dt_txt);
        }

    }]);