(function(){
  angular
    .module('app')
    .controller('CertListController', [
      'tableService',
      '$scope',
      '$uibModal',
      TableController
    ]);

  function TableController(tableService , $scope, $uibModal) {

    $scope.gridOptions = {
      paginationPageSizes: [10, 50, 100],
      paginationPageSize: 10,
      enableFiltering: true,
      enableSelectAll: true,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      columnDefs: [
      { field: 'edit', displayName : '', enableSorting: false , enableColumnMenu: false , enableFiltering :  false , cellTemplate : ' <center><span class="glyphicon glyphicon-edit" style="padding-top: 4px; cursor : pointer;" ng-click="grid.appScope.openPopup(row);"></span></center>', width : 50 },
      { field: 'Id', displayName : 'Id', enableSorting: false ,enableColumnMenu: false , enableVisible : false,visible: false},
      { field: 'CryptoObject',displayName : 'Crypto Object',enableHiding: false},
      { field: 'NotBefore', displayName : 'Not Before',enableHiding: false},
      { field: 'NotAfter', displayName : 'Not After',enableHiding: false},
      { field: 'ExpiresInDays' , displayName : 'Expires In Days',enableHiding: false},
      { field: 'Subject',displayName : 'Subject',enableHiding: false},
      { field: 'Issuer',displayName : 'Issuer',enableHiding: false}
      ],

      onRegisterApi: function (gridApi) {
        $scope.grid1Api = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            // debugger;
          // var msg = 'row selected ' + row.isSelected;
        });
      },
      rowTemplate : rowTemplate()
    };

    UpdateList();
    var modalInstance =null;
    $scope.openPopup = function (row){
      // debugger;
      tableService.setSelectedRowObj(row.entity);
      modalInstance = $uibModal.open({
      templateUrl: 'app/views/partials/editCertificate.html',
      controller: 'editCertPopupController'
      });
    };

    $scope.$on("ReloadGrid",function(){
      // debugger;
      modalInstance.close();
      UpdateList();
    });

    $scope.rowDblClick = function( row) {
      tableService.setSelectedRowObj(row.entity);
      modalInstance = $uibModal.open({
      templateUrl: 'app/views/partials/viewCertificate.html',
      controller: 'viewCertPopupController'
      });
    };

    function UpdateList(){
      tableService.getCertList().then(function(data){
        // debugger;
        $scope.certificats = data;
        $scope.gridOptions.data = $scope.certificats;
        $scope.gridOptions.multiSelect = false;
        $scope.gridOptions.modifierKeysToMultiSelect = false;
        $scope.gridOptions.noUnselect = true;
      });
    }
    function rowTemplate() {
        return '<div ng-dblclick="grid.appScope.rowDblClick(row)" >' +
                    '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                    '</div>';
    }

  }

})();
