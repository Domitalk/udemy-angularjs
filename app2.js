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

// custom services 
// these services are singletons, and can be shared across all pages 
// prob need to persist somewhere tho bc the refresh will clear it
myApp.service('nameService', function() {
    var self = this
    this.name = 'John Doe'
    this.nameLength = function () {
        return self.name.length
    }
})


// using custom service 
myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

    $scope.name = nameService.name
    // $log.log(nameService.name)
    // $log.log(nameService.nameLength())
    $scope.$watch('name', function() {
        nameService.name = $scope.name 
    })

    $scope.people = [
        {
            name: 'John Doe', 
            address: '111 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        }, 
        {
            name: 'Jane Doe', 
            address: '222 Second St.',
            city: 'New York',
            state: 'NY',
            zip: '11112'
        }, 
        {
            name: 'George Doe', 
            address: '333 Third St.',
            city: 'New York',
            state: 'NY',
            zip: '11113'
        }
    ]
    
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip
    }
    
}])

myApp.controller('secondController', ['$scope', '$routeParams', 'nameService', function ($scope, $routeParams, nameService) {
    
    $scope.name = nameService.name
    $scope.$watch('name', function() {
        nameService.name = $scope.name 
    })


    // $scope.name = 'Second'
    $scope.num = $routeParams.num || 1

}])

// replace will make it so the <search-result> wrapper is just gone 
// we can use this custom directive as <search-result/> or else <div search-result/>

// divide component with templateUrl 

// the last arg of scope: {} isolates the model that the child can access 
// when empty, it has access to nothing, we have to pass the scope that i can access

// @ means type="text"
// we can say personName: '@person-name' but because the naming convention is same we don't have to
// = is object, also two way binding 
// & is function 
// you can do some compile-time editing of directives inside of compile: function() {}
myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true, 
        scope: {
            // personName: "@",
            // personAddress: "@", 
            personObject: "=",
            formattedAddressFunction: "&"
        },
        compile: function (elem, attrs) {
            console.log("Compiling...")
            console.log(elem)
            // we can change anything last min here right before render, after all the vars from model are connected
            return {
                post: function (scope, element, attrs) {
                    console.log("Post-linking...")
                    console.log(scope)
                    console.log(element)
                }
            }
        }
    }
    // other options include 
    // restrict: 'E' 
    // element 
    // restrict: 'A'
    // attribute 
    // default is 
    // restrict: 'AE'
})