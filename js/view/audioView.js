(function () {
  angular.module('view.audio', [])
    .config(function($routeProvider) {
        $routeProvider
          .when('/audio', {
            label: 'Audio',
            templateUrl: 'templates/audioView.tpl.html',
            controller: audioViewController
        });
  });

  function audioViewController($scope) {

  }
})();