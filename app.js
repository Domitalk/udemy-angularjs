// match name with index ng
// the array holds dependency modules 
var myApp = angular.module('myApp', ['ngMessages'])
// had to add in the script tag for ngMessages? 

// match name with index ng
// these args $scope, $log etc are dependency injections ALSO
myApp.controller('mainController', function($scope, $log, $filter) {

    // $scope.name = 'Jane Doe'
    // $scope.occupation = 'Coder'

    // $scope.getname = function() {
    //     return 'John Doe'
    // }

    // $scope.getname()
    // console.log($scope)

    // console.log($log)
    // $log.log("Hello.")
    // $log.info("This is some info")
    // $log.warn("Warning!")
    // $log.debug("Some debug information")
    // $log.error("ERROR")

    // $scope.name = 'John'
    // $scope.formattedname = $filter('uppercase')($scope.name)
    // $log.info($scope.name)
    // // 'John'
    // $log.info($scope.formattedname)
    // // 'JOHN'

})





// var searchPeople = function(firstName, lastName, height, age, occupation) {

//     return 'Jane Doe'

// }

// to get the return val 
// console.log(searchPeople(1, 2, 3, 4, 5))
// to get the function back
// console.log(searchPeople)
// in the console, this is represented as a singified version of the function itself

// console.log(angular.injector().annotate(searchPeople))
// this will retun an array with all the args 

// NOTES 
// angularjs uses dependency injection. 
// basically using variables in memory to change up the html
