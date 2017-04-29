angular.module('bmc.organizations', [])

.controller('organizations', function($scope) {

    var myName = "thomas";
    $scope.myName = "thomasjuranek";
})

.controller('sub_organizations', function($scope) {
    var storage = window.localStorage;
    var value = storage.getItem(key); // Pass a key name to get its value.
    storage.setItem(key, value) // Pass a key name and its value to add or update that key.
    storage.removeItem(key) // Pass a key name to remove that key from storage.
});
