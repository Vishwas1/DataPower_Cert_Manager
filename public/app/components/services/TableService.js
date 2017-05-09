(function(){
  // 'use strict';
  var app = angular.module('app',[]);
  app.service('tableService',tableService);
  tableService.$inject = ['$http','$q'];

  function tableService($http,$q){
    var tblService = this;
    var tableData = [];
    var selectedCertRowObject = null;

    tblService.getCertList = function(){
      // debugger;
      var defer = $q.defer();
      tableData = [];
      $http.get('/api/cert-list')
          .then(function(response){
            angular.forEach(response.data, function(data){
              var certificateObject =  {
                Id: data.Id,
                CryptoObject : data.CryptoObject,
                NotBefore : data.NotBefore,
                ExpiresInDays : data.ExpiresInDays,
                NotAfter :  data.NotAfter,
                Subject : data.Subject,
                Issuer : data.Issuer
              };
              tableData.push(certificateObject);
            });
            // debugger;
            defer.resolve(tableData);
          },function(error){
            console.log(error);
            defer.reject(error);
          });
         return defer.promise;
    };

    tblService.getSelectedRowObj = function(){
      return selectedCertRowObject;
    };

    tblService.setSelectedRowObj = function(rowObj){
      // debugger;
      selectedCertRowObject = {
        CryptoObject : rowObj.CryptoObject,
        NotBefore : rowObj.NotBefore,
        ExpiresInDays : rowObj.ExpiresInDays,
        NotAfter :  rowObj.NotAfter,
        Subject : rowObj.Subject,
        Issuer : rowObj.Issuer,
        Id : rowObj.Id
      };
    };

    tblService.updateCertificate = function(certObj){
      // debugger;
      var defer = $q.defer();
      certObj = JSON.stringify(certObj);
      console.log(certObj);
      $http({
          method: 'POST',
          url: '/api/cert-list-post',
          data: certObj,
          headers: {'Content-Type': 'application/json'}
      }).then(function(response){
        defer.resolve(response.data);
      },function(response){
        defer.reject(response.data);
      });
      return defer.promise;
    };
  }

})();
