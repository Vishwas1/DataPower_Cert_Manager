
function FetchDataFromDBService($http){
  var fetchdata = this;
  console.log('...................................................inside FetchDataFromDBService');
  fetchdata.getData = function(){
    console.log('...................................................inside FetchDataFromDBService -> getdata');
    return $http.get('/api/data');

  };
}
