(function(){
  // 'use strict';
  var app = angular.module('app',[]);
  app.service('tableService',tableService);
  tableService.$inject = ['$http','$q'];

  function tableService($http,$q){
    var tblService = this;
    var tableData = [];
    tblService.getCertList = function(){
      var defer = $q.defer();
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
  }

})();
