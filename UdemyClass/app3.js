var myApp = angular.module('myApp', ['ngRoute', 'ngResource'])

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
}])

myApp.service('cityObj', function () {
    this.cityName = 'New York, NY' 
})

myApp.controller('mainController', ['$scope', 'cityObj', function ($scope, cityObj) {

    $scope.cityName = cityObj.cityName
    $scope.$watch('cityName', function () {
        cityObj.cityName = $scope.cityName
    })

}])
myApp.controller('forecastController', ['$scope', '$resource', 'cityObj', function ($scope, cityObj, $resource) {

    $scope.cityName = cityObj.cityName 

    

}])

// myApp.directive('forecastResult', function () {
//     return {
//         restrict: 'ACEM',
//         templateUrl: 'directives/forecastresult.html',
//         replace: true, 
//         scope: {
//             cityObj: '='
//         }
//     }
// })