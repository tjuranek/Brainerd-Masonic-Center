angular.module('bmc.organizations', [])

.controller('organizations', function($state, $scope) {
    var storage = window.localStorage;

    $scope.goToOrg = function(organization) {
        storage.setItem('currentSubOrganization', organization);
        $state.go('app.sub_organization');
    }
})

.controller('sub_organizations', function($scope) {
    var storage = window.localStorage;
    $scope.name = storage.getItem('currentSubOrganization');
});
