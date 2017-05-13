(function(){
  angular
    .module('app')
    .controller('viewCertPopupController', [
      'tableService',
      '$scope',
      '$rootScope',
      viewCertPopupController
    ]);

  function viewCertPopupController(tableService,$scope,$rootScope){
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
  }
})();
