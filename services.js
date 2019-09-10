// servicez
weatherApp.service('cityService', function () {
    this.city = 'Dublin';
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
    this.GetWeather = function(city, days){

        let weatherAPI =
            $resource('http://api.openweathermap.org/data/2.5/forecast/?q=dublin&cnt=2&APPID=3074798bebbc48aa3f502c48f6b00ad4', {
                callback: 'JSON_CALLBACK'
            }, { get: { method: 'JSONP' } });
        return weatherAPI.get({
            q: city, cnt: 2
        });

    }
}]);