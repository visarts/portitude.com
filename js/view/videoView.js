(function () {
  angular.module('view.video', [])
    .config(function($routeProvider) {
        $routeProvider
          .when('/video', {
            label: 'Video',
            templateUrl: 'templates/videoView.tpl.html',
            controller: videoViewController
        });
  });

  function videoViewController($scope) {

  }
})();