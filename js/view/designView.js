(function () {
  angular.module('view.design', [])
    .config(function($routeProvider) {
        $routeProvider
          .when('/design', {
            label: 'Design',
            templateUrl: 'templates/designView.tpl.html',
            controller: designViewController
        });
  });

  function designViewController($scope) {

  }
})();