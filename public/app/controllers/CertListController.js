(function(){

  angular
    .module('app')
    .controller('CertListController', [
      'tableService',
      '$scope',
      TableController
    ]);

  function TableController(tableService , $scope) {
    // var vm = this;
    // vm.tableData = [];
    // vm.totalItems = 0;
    // tableService.getCertList().then(
    //   function (data){
    //     vm.tableData = data;
    //     vm.totalItems =  data.length;
    //   });
    $scope.gridOptions = {
      paginationPageSizes: [10, 50, 100],
      paginationPageSize: 10,
      enableFiltering: true,
      columnDefs: [
      { field: 'edit', displayName : '', enableSorting: false , enableFiltering :  false , cellTemplate : '<center><span class="glyphicon glyphicon-edit" style="padding-top: 4px;"></span></center>' },
      { field: 'Id', displayName : 'Id', enableSorting: false },
      { field: 'CryptoObject',displayName : 'Crypto Object'},
      { field: 'NotBefore', displayName : 'Not Before'},
      { field: 'NotAfter', displayName : 'Not After'},
      { field: 'ExpiresInDays' , displayName : 'Expires In Days'},
      { field: 'Subject',displayName : 'Subject'},
      { field: 'Issuer',displayName : 'Issuer'}
      ],
      onRegisterApi: function (gridApi) {
      $scope.grid1Api = gridApi;
      }
    };
    tableService.getCertList().then(function(data){
      debugger;
      $scope.certificats = data;
      $scope.gridOptions.data = $scope.certificats;
    });

  }

})();
