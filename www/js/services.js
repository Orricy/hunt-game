angular.module('starter.services', [])

.factory('$localStorage', ['$window', function ($window) {
    return {
        set: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }
    }
}])
.factory('geoLocation', function ($localStorage) {
    return {
        setGeolocation: function (latitude, longitude) {
            var position = {
                latitude: latitude,
                longitude: longitude
            }
            $localStorage.setObject('geoLocation', position)
        },
        getGeolocation: function () {
            return glocation = {
                lat: $localStorage.getObject('geoLocation').latitude,
                lng: $localStorage.getObject('geoLocation').longitude
            }
        }
    }
})