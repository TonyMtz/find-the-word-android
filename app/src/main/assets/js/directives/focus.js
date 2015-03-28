angular.module('hangman.directives')
  .directive('focus', [
    '$timeout',
    function($timeout) {
      return {
        link: function() {
          var $element = arguments[1];
          $timeout(function() {
            $element[0].focus();
          });
        }
      };
    }]);
