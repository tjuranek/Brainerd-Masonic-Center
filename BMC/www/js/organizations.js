angular.module('bmc.organizations', [])

.controller('organizations', function($state, $scope) {
  $scope.goToOrg = function(organization) {
    window.localStorage.setItem('currentSubOrganization', organization);
    $state.go('app.sub_organization');
  }
})

.controller('sub_organizations', function($scope) {
    var JSONBand = {
    "name": "Oriental Band",
    "about1": "this is about us infor",
    "about2": "of its great philanthropy, the Shriners Hospitals for Children.",
    "contacts": [
        {
            "contact": {
                "role" : "President",
                "name": "Jeff Harmon",
                "email": "jeff_harmon@hotmail.com",
                "phone": "218-839-1500"
            }
        },
        {
            "contact": {
                "role" : "Treasurer/Secretary",
                "name" : "Jeff Van Horn",
                "email": "jffvanhorn@yahoo.com",
                "phone": ""
            }
        }
    ]
}


  $scope.currentSubOrganization = window.localStorage.getItem('currentSubOrganization');
});
