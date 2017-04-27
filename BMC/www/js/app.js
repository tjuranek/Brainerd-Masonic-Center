angular.module('bmc', ['ionic', 'bmc.settings', 'bmc.calendar'])

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

  .state('app.donations', {
    url: '/donations',
    views: {
      'menuContent': {
        templateUrl: 'templates/donations.html'
      }
    }
  })

  .state('app.dues', {
    url: '/dues',
    views: {
      'menuContent': {
        templateUrl: 'templates/dues.html'
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
  .state('app.contacts', {
    url: '/contacts',
    views: {
      'menuContent': {
        templateUrl: 'templates/contacts.html'
      }
    }
  })
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  })
  .state('app.aurora', {
    url: '/aurora',
    views: {
      'menuContent': {
        templateUrl: 'templates/aurora.html'
      }
    }
  })
  .state('app.addzuhman', {
    url: '/addzuhman',
    views: {
      'menuContent': {
        templateUrl: 'templates/addzuhman.html'
      }
    }
  })

  .state('app.auxiliary', {
    url: '/auxiliary',
    views: {
      'menuContent': {
        templateUrl: 'templates/auxiliary.html'
      }
    }
  })
  .state('app.band', {
    url: '/band',
    views: {
      'menuContent': {
        templateUrl: 'templates/band.html'
      }
    }
  })
  .state('app.oes', {
    url: '/oes',
    views: {
      'menuContent': {
        templateUrl: 'templates/oes.html'
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
  }) ;



  $urlRouterProvider.otherwise('/app/home');
});
