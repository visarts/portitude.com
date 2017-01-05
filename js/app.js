angular.module('mainApp', [
  'ngRoute',
  'ng-breadcrumbs',
  'ui.bootstrap',
  'picardy.fontawesome',
  'ngAnimate',
  'view',
  'directives',
  'modals'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({templateUrl: '404.html'});
  }])
  .controller('mainController', ['$scope', '$location', 'breadcrumbs', mainController]);

function mainController($scope, $location, breadcrumbs) {
  $scope.breadcrumbs = breadcrumbs;

}