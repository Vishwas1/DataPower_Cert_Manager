(function(){

  angular
    .module('app')
    .controller('CertListController', [
      'tableService',
      '$scope',
      TableController

    ]);

  function TableController(tableService , $scope) {
    var vm = this;
    vm.tableData = [];
    vm.totalItems = 0;
    tableService.getCertList().then(
      function (data){
        vm.tableData = data;
        vm.totalItems =  data.length;
      }
    );




  }

})();
