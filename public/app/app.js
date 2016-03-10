//var app = angular.module('app', [ngResource, ngRoute]);

angular.module('app', ['ngResource', 'ngRoute']);


//app.config();
angular.module('app').config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {templateUrl: '/partials/home', controller: 'homeCtrl'})
            .when('/contacts', {templateUrl: '/partials/contacts', controller: 'contactsCtrl'})
    }
);

angular.module('app').controller('homeCtrl', function ($scope){

});

angular.module('app').controller('contactsCtrl', function ($scope){

});