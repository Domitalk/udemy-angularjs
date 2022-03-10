var myApp = angular.module('myApp', ['ngRoute'])

const serverLocal = 'http://127.0.0.1:8887'


myApp.config(['$routeProvider', function ($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: serverLocal + '/pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

}])

myApp.controller('mainController', ['$scope', function ($scope) {

    
    
}])

myApp.controller('secondController', ['$scope', function ($scope) {


    
}])
