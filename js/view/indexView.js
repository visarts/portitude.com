angular.module('view.index', [])
  .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          label: 'Home',
          templateUrl: 'templates/indexView.tpl.html',
          controller: indexViewController
      });
});

function indexViewController($scope, $location) {

   
}