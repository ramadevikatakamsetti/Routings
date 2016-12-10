(function(){
    
    
    angular.module("route",["header","home","register","login", "ui.router"]);
    
    angular.module("route").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
               $urlRouterProvider.otherwise("/home");
        
                     
                var homeobj ={
                    
                    templateUrl:'app/template/home/home.html',
                    url:"/home",
                    controller:"homeCtrl",
                    params:{homeData:""}
                    
                };
                
                var registerObj={
                    
                    templateUrl:'app/template/register/register.html',
                    url:"/register",
                    controller:"registerCtrl"
                };
                
                 var loginObj={
                    
                     name:"login",
                    templateUrl:'app/template/login/login.html',
                    url:"/login",
                    controller:"loginCtrl"
                };
        
                $stateProvider.state("home",homeobj);
                $stateProvider.state("register",registerObj);
                $stateProvider.state("login",loginObj);
        
                
    }]);
})();