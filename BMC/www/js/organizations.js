angular.module('bmc.organizations', [])

.controller('organizations', function($state, $scope) {
  $scope.goToOrg = function(organization) {
    window.localStorage.setItem('currentSubOrganization', organization);
    $state.go('app.sub_organization');
  }
})

.controller('sub_organizations', function($scope) {
  var currentSubOrganization = window.localStorage.getItem('currentSubOrganization');
});
