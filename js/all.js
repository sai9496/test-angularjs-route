var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "home.html",
        controller: "homeCtrl"
    };
    var contactState = {
        name: "contact",
        url: "/contact",
        templateUrl: "contact.html",
        controller: "contactCtrl"
    };
    var profileState = {
        name: "profile",
        url: "/profile",
        templateUrl: "profile.html",
        controller: "profileCtrl"
    };
    var servicesState = {
        name: "services",
        url: "/services",
        templateUrl: "services.html",
        controller: "servicesCtrl"
    };
    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(profileState);
    $stateProvider.state(servicesState);
});