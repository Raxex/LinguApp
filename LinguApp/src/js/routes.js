angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('enroll', {
    url: '/page3',
    templateUrl: 'templates/enroll.html',
    controller: 'enrollCtrl'
  })

  .state('mainMenu', {
    url: '/page4',
    templateUrl: 'templates/mainMenu.html',
    controller: 'mainMenuCtrl'
  })

  .state('foneticaMenu', {
    url: '/page5',
    templateUrl: 'templates/foneticaMenu.html',
    controller: 'foneticaMenuCtrl'
  })

  .state('tfoneticaMenu', {
    url: '/page6',
    templateUrl: 'templates/tfoneticaMenu.html',
    controller: 'tfoneticaMenuCtrl'
  })

  .state('tfonologicaMenu', {
    url: '/page7',
    templateUrl: 'templates/tfonologicaMenu.html',
    controller: 'tfonologicaMenuCtrl'
  })

  .state('cfonologica', {
    url: '/page8',
    templateUrl: 'templates/cfonologica.html',
    controller: 'cfonologicaCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});