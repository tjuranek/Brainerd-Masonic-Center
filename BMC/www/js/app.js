angular.module('bmc', ['ionic', 'bmc.calendar', 'bmc.organizations', 'bmc.settings'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.calendar', {
    url: '/calendar',
    views: {
      'menuContent': {
        templateUrl: 'templates/calendar.html'
      }
    }
  })

  .state('app.duesdonations', {
    url: '/duesdonations',
    views: {
      'menuContent': {
        templateUrl: 'templates/duesdonations.html'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.organizations', {
    url: '/organizations',
    views: {
      'menuContent': {
        templateUrl: 'templates/organizations.html'
      }
    }
  })

  .state('app.sub_organization', {
    url: '/sub_organization',
    views: {
      'menuContent': {
        templateUrl: 'templates/sub_organization.html'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html'
      }
    }
  });



  $urlRouterProvider.otherwise('/app/home');
});
