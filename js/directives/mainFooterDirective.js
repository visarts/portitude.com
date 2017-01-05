angular.module('directive.mainFooter', [])
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/mainFooterDirective.tpl.html',
      controller: mainFooterController,
    };
  });

function mainFooterController($scope, $location, $uibModal) {

  $scope.isHome = true;

  function openContactForm() {
    $uibModal.open({
      animation: true,
      templateUrl: 'templates/modals/contactModal.tpl.html',
      controller: 'contactModalController',
    });
  }

  $scope.openContactForm = openContactForm;

  $scope.$on('$locationChangeStart', function() {
    if($location.url() === '/') {
      $scope.isHome = true;
    } else {
      $scope.isHome = false;
    }
  });
}
