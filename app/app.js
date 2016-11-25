'use strict';

// Declare app level module which depends on views, and components
angular.module('users', [
  'ngRoute',
  'users.users'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/users'});
}]);
