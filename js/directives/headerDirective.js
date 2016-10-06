angular.module('directiveApp')
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './views/headerTmpl.html'
    }
  })
