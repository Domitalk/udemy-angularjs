var myApp = angular.module('myApp', ['ngRoute'])

const serverLocal = 'http://127.0.0.1:8887'


myApp.config(['$routeProvider', function ($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: '/pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

}])

myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.name = 'Main'
    
    
}])

myApp.controller('secondController', ['$scope', '$routeParams',  function ($scope, $routeParams) {

    $scope.name = 'Second'
    $scope.num = $routeParams.num

}])
