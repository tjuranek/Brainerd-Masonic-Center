angular.module('bmc.settings', [])

  .controller('settings', function($scope) {
    var setview = function(a) {
      if (a) {
        document.getElementById('push').style.display = 'block';
      } else {
        document.getElementById('push').style.display = 'none';
      }
    }//try reading from JSON if it already exists
    try {
      var all = JSON.parse(window.localStorage.getItem("pushNotifications"));
      var notif_Aurora = all.aurora;
      var notif_Addzuhman = all.addzuhman;
      var notif_OES = all.oes;
      var notif_Band = all.band;
      var notif_Aux = all.aux;
      var allow_notif = all.notif;
    }
    //if it doesn't exist, create it and initialize values
    catch (eee) {
      var notif_Aurora = false;
      var notif_Addzuhman = false;
      var notif_OES = false;
      var notif_Band = false;
      var notif_Aux = false;
      var allow_notif = true;
      $scope.NotifChecked = true;
    }
    $scope.NotifChecked = allow_notif;
    $scope.AuxiliaryChecked = notif_Aux;
    $scope.AuroraChecked = notif_Aurora;
    $scope.OESChecked = notif_OES;
    $scope.AddzuhmanChecked = notif_Addzuhman;
    $scope.BandChecked = notif_Band;
    setview(allow_notif);
    $scope.change = function(a) {
      switch (a) {
        case 1:
          notif_Aurora = swap(notif_Aurora);
          break;
        case 2:
          notif_Addzuhman = swap(notif_Addzuhman);
          break;
        case 3:
          notif_OES = swap(notif_OES);
          break;
        case 4:
          notif_Band = swap(notif_Band);
          break;
        case 5:
          notif_Aux = swap(notif_Aux);
          break;
        case 6:
          allow_notif = swap(allow_notif);
          setview(allow_notif);
          break;
      }
      updateInformation();
    }
    var updateInformation = function() {
      var appData = {
        notif: allow_notif,
        aurora: notif_Aurora,
        addzuhman: notif_Addzuhman,
        oes: notif_OES,
        band: notif_Band,
        aux: notif_Aux
      };
      window.localStorage.setItem("pushNotifications", JSON.stringify(appData));
      console.log(window.localStorage.getItem("pushNotifications"));
    };
    var swap = function(variable) {
      return (variable == false);
    }
  });
