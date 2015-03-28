angular.module('hangman.directives')
  .directive('matchWith', [function() {
    return {
      require: 'ngModel',
      link: function($scope, $element, attributes, ngModel) {
        ngModel.$parsers.unshift(function(value) {
          var valueToMatch = $scope[attributes.matchWith];
          ngModel.$setValidity('pwmatch', value === valueToMatch);
          return value;
        });
      }
    };
  }]);
