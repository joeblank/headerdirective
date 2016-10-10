angular.module('directiveApp', ['ui.router'])

  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller:'homeCtrl'
      })
      .state('page1', {
        url: '/page1',
        templateUrl: './views/page1.html',
        controller:'page2Ctrl'
      })
      .state('page2', {
        url: '/page2',
        templateUrl: './views/page2.html',
        controller:'page2Ctrl'
      })

        $urlRouterProvider.otherwise('/');
  }])

angular.module('directiveApp')
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './views/headerTmpl.html'
    }
  })

angular.module('directiveApp')
  .controller('homeCtrl', ["$scope", "$state", function($scope, $state) {



  }])

angular.module('directiveApp')
  .controller('page1Ctrl', ["$scope", function($scope) {

$scope.hey = 0;

  }])

angular.module('directiveApp')
  .controller('page2Ctrl', ["$scope", "$state", function($scope, $state) {



  }])
