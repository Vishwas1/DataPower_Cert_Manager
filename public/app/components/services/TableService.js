(function(){
  // 'use strict';
  var app = angular.module('app',[]);
  app.service('tableService',tableService);
  tableService.$inject = ['$http','$q'];

  function tableService($http,$q){
    var tblService = this;
    var tableData = [];
    var selectedCertRowObject = null;
    var defer = $q.defer();
    tblService.getCertList = function(){
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
        Issuer : rowObj.Issuer
      };
    };

    tblService.updateCertificate = function(certObj){
      debugger;
      certObj = JSON.stringify(certObj);
      // var resp = $http.post('/api/cert-list', certObj);
      // debugger;
      // $http({ method: "POST", url: '/api/cert-list', data: certObj, cache: false })
      // .then(function(response){
      //   defer.resolve("Success");
      // },function(error){
      //   defer.reject("Fail");
      // });
      // return defer.promise;
      console.log(certObj);
       var config = {
            headers : {
                "Content-Type": "application/json; charset = utf-8;"
            }
        };
      $http.get('/api/cert-list', certObj,config)
         .then(function(response) {
             if (typeof response.data === 'object') {
                 defer.resolve(response.data);
             } else {
                 defer.reject(response.data);
             }
          })
          .catch(function(response) {
             return defer.reject(response.data);
          });

          return defer.promise;
    };







  }

})();
