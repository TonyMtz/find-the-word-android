angular.module('hangman.directives')
  .directive('word', [function() {
    return {
      restrict: 'E',
      template: '<span>LOL</span>',
      require: 'ngModel',
      scope: {
        model: '='
      },
      link: function($scope, $element, attributes) {
        $scope.model = 'cosa';
      }
    };
  }]);
