angular.module('bmc.settings', [])

  .controller('settings', function($scope) {
    //try reading from JSON if it already exists
    try {
      var all = JSON.parse(window.localStorage.getItem("pushNotifications"));
      console.log(all);
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
    if (allow_notif) {
      document.getElementById('push').style.display = 'block';
    } else {
      document.getElementById('push').style.display = 'none';
    }


    $scope.notifChanged = function() {
      if (allow_notif) {
        allow_notif = false;
        document.getElementById('push').style.display = 'none';
      } else {
        allow_notif = true;
        document.getElementById('push').style.display = 'block';
      }
      updateInformation();
    }
    $scope.AuroraChanged = function() {
      if (notif_Aurora)
        notif_Aurora = false;
      else {
        notif_Aurora = true;
      }
      updateInformation();
    }

    $scope.AddzuhmanChanged = function() {
      if (notif_Addzuhman)
        notif_Addzuhman = false;
      else {
        notif_Addzuhman = true;
      }
      updateInformation();
    }
    $scope.OESChanged = function() {
      if (notif_OES)
        notif_OES = false;
      else {
        notif_OES = true;
      }
      updateInformation();
    }
    $scope.BandChanged = function() {
      if (notif_Band)
        notif_Band = false;
      else {
        notif_Band = true;
      }
      updateInformation();
    }
    $scope.AuxiliaryChanged = function() {
      if (notif_Aux)
        notif_Aux = false;
      else {
        notif_Aux = true;
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
  });
