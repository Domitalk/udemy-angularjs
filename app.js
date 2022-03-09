// match name with index ng
var myApp = angular.module('myApp', [])

// match name with index ng
myApp.controller('mainController', function($scope) {

    $scope.name = 'Jane Doe'
    $scope.occupation = 'Coder'

    $scope.getname = function() {
        return 'John Doe'
    }

    $scope.getname()
    console.log($scope)

})



// NOTES 
// angularjs uses dependency injection. 
// basically using variables in memory to change up the html
