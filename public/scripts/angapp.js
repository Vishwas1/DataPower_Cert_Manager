(function (){
  'use strict';
  var app = angular.module('angapp',[]);
  app.controller('mainCtrl',myCtrlFunction);

  function myCtrlFunction(){
    var certMgr = this;
    certMgr.someMessage ="This message is cocming from Angular Controller!";
  }
})();


// var app = angular.module('angapp',[]);
// app.controller('mainCtrl', function($scope, $http) {
//     $scope.data = [];
//     var request = $http.get('/data');
//     request.success(function(data) {
//         $scope.data = data;
//     });
//     request.error(function(data){
//         console.log('Error: ' + data);
//     });
// });
