(function(){
  angular
    .module('app')
    .controller('editCertPopupController', [
      'tableService',
      '$scope',
      '$rootScope',
      editCertPopupController
    ]);

  function editCertPopupController(tableService,$scope,$rootScope){
    // debugger
    var selectedctrl = tableService.getSelectedRowObj();
    if(selectedctrl){
      $scope.CryptoObject = selectedctrl.CryptoObject;
      $scope.NotBefore = selectedctrl.NotBefore;
      $scope.ExpiresInDays = selectedctrl.ExpiresInDays;
      $scope.NotAfter = selectedctrl.NotAfter;
      $scope.Subject = selectedctrl.Subject;
      $scope.Issuer = selectedctrl.Issuer;
      $scope.Id = selectedctrl.Id;
    }else{
      console.error('selectedctrl is null or empty!');
    }

    $scope.updateCertificate  =  function(){
      // debugger;
      var updatedCertObj = {
        CryptoObject : $scope.CryptoObject,
        NotBefore : $scope.NotBefore ,
        ExpiresInDays : $scope.ExpiresInDays,
        NotAfter : $scope.NotAfter,
        Subject : $scope.Subject,
        Issuer : $scope.Issuer,
        Id : $scope.Id
      };

      tableService.updateCertificate(updatedCertObj).then(function(resp){
        // debugger;
        if(resp == 'Success!'){
          console.log('Success');
          // alert('Successfully updated!');
           $rootScope.$broadcast('ReloadGrid');
        }else{
          alert('Some error has occurred in server!');
        }
      },function(errResp){
        console.log('errResp');
      });
    };

  }
})();
