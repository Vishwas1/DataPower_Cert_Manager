(function (){
  'use strict';
  var app = angular.module('angapp',[]);
  app.controller('mainCtrl',mainCtrlFunction);
  app.service('FetchDataFromDBService',FetchDataFromDBService);
  mainCtrlFunction.$inject = ['FetchDataFromDBService'];
  function mainCtrlFunction(FetchDataFromDBService){
    var certMgr = this;
    console.log('...................................................mainCtrlFunction');
    certMgr.myFunc =  function(){  FetchDataFromDBService.getData().then(
          function(response){
            // success callback
            console.log(response);
            console.log(JSON.stringify(response.data));
            certMgr.someMessage = JSON.stringify(response.data);
          },
          function(err){
            // failure call back
            console.log(err);
            return err;
          }
       ); };
  }
})();
