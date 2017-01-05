(function () {
  angular.module('view.portfolio', [])
    .config(function($routeProvider) {
        $routeProvider
          .when('/portfolio', {
            label: 'Portfolio',
            templateUrl: 'templates/portfolioView.tpl.html',
            controller: portfolioViewController
        });
  });

  function portfolioViewController($scope) {

  }
})();