angular.module('directive.mainHeader', [])
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/mainHeaderDirective.tpl.html',
      controller: mainHeaderController,
    };
  });

function mainHeaderController($scope, $location) {

  $scope.currentLocation = '';
  /**
    * get the name of the view after the '/' and put it on the scope
    *
   **/
  function setActiveNavLocation() {
    var locationArray = $location.url().split('/');
    $scope.currentLocation = locationArray[1];
  }

  $scope.$on('$locationChangeStart', function() {
    setActiveNavLocation();
  });

  setActiveNavLocation();

}
