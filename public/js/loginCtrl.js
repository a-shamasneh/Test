
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http) => {

    $scope.login= () =>
    {
        $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(r => {
            $scope.user = r.data;
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    }
    // handel change picture
    $scope.changePicture=()=>{
        $http.post('/api/ChangePicture', {pic:$scope.newpic}).then(e => {
            $scope.user.profilePic = e.data.newPic;
           
        }, e => {
            $scope.errorMessage = e.data.message;
            
        });
       
    }
}]);
