angular.module('directiveApp', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

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
  })
