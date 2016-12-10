(function(){
    function registerCtrl($scope,$state){
        $scope.user={};
        $scope.register = function(){
            
            $state.go("home",{homeData:$scope.user});
            
            
        }
        
    }
    
    angular.module("register").controller("registerCtrl",["$scope","$state",registerCtrl]);
})();