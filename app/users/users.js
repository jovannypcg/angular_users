'use strict';

let app = angular.module('myApp.users', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'users/users-view.html',
        controller: 'usersCtrl',
        controllerAs: 'usersCtrl'
    });
}])

app.controller('usersCtrl', ['$http', function($http) {
    let ctrl = this;
    ctrl.users = [];

    $http.get('https://randomuser.me/api/?results=10').success(data => {
        ctrl.users = data.results;
        for (let user of ctrl.users) {
            console.log(user.picture.large);
        }
    }).error(err => {

    });
}]);
