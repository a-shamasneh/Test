
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

    // handel change password
    $scope.changePassword=()=>{
        $http.post('/api/ChangePassword', {newPass:$scope.newPassword}).then(e => {
            // back to login page expected null value from server side
            $scope.user=e.data;
           
        }, e => {
            $scope.errorMessage = e.data.message;
            
        });
    }
}]);
