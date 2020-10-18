const URL ="https://covid1n9.mathdro.id/api";
let app = angular.module('myApp',[]); 

app.controller("MyCtrl",($scope,$http)=>{
$scope.title="Stay Home Stay Safe "; 
console.log("app Loaded")

// Calling apis
$http.get(URL).then(
    (response)=>{
  // Success 
 // console.log(response);
  $scope.all_data=response.data; 

},
(error)=>{
    console.log(error);
}
); // eND OF GET URL
$scope.get_c_data = () =>{
  let country=$scope.c; 
  if(country==''){
    return ;
  }
   $http.get(`${URL}/countries/${country}`).then(
     (response)=>{  
             console.log(response.data)
     $scope.c_data=response.data; 
 
  },
  (error)=>{
    console.log(error) }
  ); 
} ; // ENd of coutry data
}); // enD OF cONTROLLER METHOD


