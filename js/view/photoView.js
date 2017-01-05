(function () {
  angular.module('view.photo', [])
    .config(function($routeProvider) {
        $routeProvider
          .when('/photo', {
            label: 'Photo',
            templateUrl: 'templates/photoView.tpl.html',
            controller: photoViewController
        });
  });

  function photoViewController($scope) {

  }
})();