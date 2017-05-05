(function(){
  'use strict';
  var app = angular.module('app',[]);
  app.service('tableService',tableService);
  tableService.$inject = ['$http','$q'];

  function tableService($http,$q){
    var tableData = [];
    $http.get('/api/cert-list')
        .then(function(response){
          // debugger;
          // tableData = response.data;
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
            console.log(certificateObject);
            tableData.push(certificateObject);
          });
          console.log(tableData);
        },function(error){
          console.log(error);
          return;
        });


    function PickRandom() {
      return Object.assign({}, tableData[Math.floor(Math.random()*tableData.length)]);
    }

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      },
      /**
       * Query expects that `limit`,`page`, and `order` fields be present
       */
      loadByPagination: function (query) {
        debugger;
        query = query || {limit:10,page:1};

        var list = [];
        var start = (query.page-1)*query.limit;
        var end = start + query.limit;
        for (var i = start; i < end; i++) {
          var f = PickRandom();
          f.id = i+1;
          list.push(f);
        }
        return $q.when({items:list,count:tableData.length});
      }
    };
  }

  function certificateLst_model(id){



  }
})();
