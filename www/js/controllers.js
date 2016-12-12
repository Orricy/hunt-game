angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, geoLocation, $rootScope) {
  var position = geoLocation.getGeolocation();
  console.log(position);
  // listen location changes
  $rootScope.$on('location:change', function (position) {
    
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
