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

     ///give condition here... .ExpiresInDays > 0
       debugger;
       var curdate = GetCurDate();
       var date2 = new Date(FormatString($scope.NotAfter));
       var date1 = new Date(FormatString(curdate));
       var timeDiff = Math.abs(date2.getTime() - date1.getTime());
       $scope.ExpiresInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if($scope.ExpiresInDays > 0 )
      {
        $scope.statusBackGroundStyle = {'background-color':'darkseagreen'};
        $scope.headerStyle = {'background-color': 'darkseagreen','border-radius': '3px','padding-bottom': '6px'};
        $scope.status ='Active';
      }
      else
      {
        $scope.statusBackGroundStyle = {'background-color':'grey'};
        $scope.headerStyle = {'background-color': 'grey','border-radius': '3px','padding-bottom': '6px'};
        $scope.status ='Expired';
      }

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

  function GetCurDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
       dd='0'+dd;
    }

    if(mm<10) {
       mm='0'+mm;
    }
    today = dd+'/'+mm+'/'+yyyy;
    return today;
   }

  function FormatString(format) {
   var day   = parseInt(format.substring(0,2));
   var month  = parseInt(format.substring(3,5));
   var year   = parseInt(format.substring(6,10));
   var date = new Date(year, month-1, day);
   return date;
 }



})();
