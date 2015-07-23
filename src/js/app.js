var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        controllerAs: 'main'
    }).when("/program", {
        templateUrl: "views/program/program.html",
        controller: "ProgramCtrl",
        controllerAs: "program"
    }).when("/program/participants", {
        templateUrl: "views/program/participants.html",
        controller: "ParticipantsCtrl",
        controllerAs: "participants"
    }).when("/guide", {
        templateUrl: "views/guide/guide.html"
    }).when("/guide/howtoget", {
        templateUrl: "views/guide/howtoget.html"
    }).when("/contacts", {
        templateUrl: "views/contacts.html"
    })
        .when("/contest", {
            redirectTo: "/contest/about"
        })
        .when("/contest/about", {
            templateUrl: "views/contest/about.html"
        })
        .when("/contest/fairytale", {
            templateUrl: "views/contest/fairytale.html"
        })
        .when("/palekh", {
            templateUrl: "views/palekh.html"
        }).otherwise({
        redirectTo: '/'
    });
});


app.controller('MainCtrl', function ($scope, $http) {
    $http.get('json/partners.json').success(function (data, status, headers, config) {
        $scope.partners = data;
    }).
        error(function (data, status, headers, config) {
            console.log('error');
        });
});
