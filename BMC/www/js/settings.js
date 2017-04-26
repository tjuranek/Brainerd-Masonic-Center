angular.module('bmc.settings', [])

.controller('settings', function($scope) {


      var notif_Aurora = false;
      var notif_Addzuhman = false;
      var notif_OES = false;
      var notif_Band = false;
      var notif_Aux = false;
      var allow_notif = true;
      $scope.NotifChecked = true;

$scope.notifChanged = function(){
  if (allow_notif){
    allow_notif = false;
    document.getElementById('push').style.display = 'none';
  }
  else {
    allow_notif = true;
    document.getElementById('push').style.display = 'block';
  }
  updateInformation();
}
  $scope.AuroraChanged= function() {
      if(notif_Aurora)
      notif_Aurora = false;
      else {
        notif_Aurora = true;
      }
    updateInformation();
  }

      $scope.AddzuhmanChanged= function() {
        if(notif_Addzuhman)
        notif_Addzuhman = false;
        else {
          notif_Addzuhman = true;
        }
        updateInformation();
      }
        $scope.OESChanged= function() {
          if(notif_OES)
          notif_OES = false;
          else {
            notif_OES = true;
          }
          updateInformation();
        }
          $scope.BandChanged= function() {
            if(notif_Band)
            notif_Band = false;
            else {
              notif_Band = true;
            }
        updateInformation();
          }
            $scope.AuxiliaryChanged= function() {
              if(notif_Aux)
              notif_Aux = false;
              else {
                notif_Aux = true;
              }
              updateInformation();
            }
var updateInformation = function(){
  console.log("All Information:");
  console.log(allow_notif);
  console.log(notif_Aurora);
  console.log(notif_Addzuhman);
  console.log(notif_OES);
  console.log(notif_Band);
  console.log(notif_Aux);
}


  });
