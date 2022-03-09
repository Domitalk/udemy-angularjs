var myApp = angular.module('myApp', [])

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.handle = ''
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle)
    }
    $scope.characters = 5
    
}])



// var myApp = angular.module('myApp', [])

// // scope is what ties the virtualDOM to changes in values 
// myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {
//     // this .handle will be now tied to the html
//     $scope.handle = ''
//     $scope.lowercasehandle = function() {
//         return $filter('lowercase')($scope.handle)
//     }
//     $scope.name = 'Tony'
//     // you will see the name change in the webpage after 3 secs
//     $timeout(function() {
//         $scope.name = 'Everybody'
//     }, 3000)

//     setTimeout(function() {
//         // have to wrap this in $apply for it actually change the dom
//         // setTimeout or anything NOT angular will thread out a new process that angularjs isn't watching 
//         // the easy hack for this is obviously using $timeout instead of setTimeout()
//         $scope.$apply(function() {
//             $scope.handle = 'newtwitterhandle'
//             console.log('Scope changed!')
//         })
//     }, 3000)
    
// }])


// basically angularJS is a giant net of eventloops all tied to variables being passed between the JS and HTML
// anytime something changes, that might have an effect on the VDOM, it'll probably have a eventloop tied to it 
// a lot of addEventListeners are basically written out for you as long as all the proper steps are taken
// this is different from REACT and newer frameworks in that the newer ones go one step beyond that
// and they try to combine the two files HTML and JS into one. and represent the HTML as a declarative JSX
// AngularJS is a inbetween step wherein a lot of jquery is done for you
// but the visual representation of the written code isnt' yet unified 


// match name with index ng
// the array holds dependency modules 
// var myApp = angular.module('myApp', ['ngMessages', 'ngResource'])
// had to add in the script tag for ngMessages? 


// match name with index ng
// these args $scope, $log etc are dependency injections ALSO
// myApp.controller('mainController', function($scope, $log, $filter, $resource) {

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


    // console.log($resource)

// })





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
