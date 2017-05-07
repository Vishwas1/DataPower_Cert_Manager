(function(){
  // 'use strict';
  // var app   = angular.module('angularMaterialAdmin',[]);
  // app.controller('editCertPopupController',editCertPopupController);
  // editCertPopupController.$inject = ['tableService'];


  angular
    .module('app')
    .controller('editCertPopupController', [
      'tableService',
      '$scope',
      editCertPopupController
    ]);

  function editCertPopupController(tableService,$scope){
    debugger;
    // var ctrl = this;
    var selectedctrl = tableService.getSelectedRowObj();
    if(selectedctrl){
      $scope.CryptoObject = selectedctrl.CryptoObject;
      $scope.NotBefore = selectedctrl.NotBefore;
      $scope.ExpiresInDays = selectedctrl.ExpiresInDays;
      $scope.NotAfter = selectedctrl.NotAfter;
      $scope.Subject = selectedctrl.Subject;
      $scope.Issuer = selectedctrl.Issuer;
    }else{
      console.error('selectedctrl is null or empty!');
    }

    $scope.updateCertificate  =  function(){
      debugger;
      var updatedCertObj = {
        CryptoObject : $scope.CryptoObject,
        NotBefore : $scope.NotBefore ,
        ExpiresInDays : $scope.ExpiresInDays,
        NotAfter : $scope.NotAfter,
        Subject : $scope.Subject,
        Issuer : $scope.Issuer
      };
      tableService.updateCertificate(updatedCertObj).then(function(resp){

        if(resp == 'Success'){
          console.log('Success');
          alert('Successfully updated!');
        }
      },function(errResp){
        console.log('errResp');
      });
    };

  }
})();
