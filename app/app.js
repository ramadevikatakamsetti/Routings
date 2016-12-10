(function(){
    
    
    angular.module("ro  ute",["header","home","register","login", "ui.router"]);
    
    angular.module("route").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
               $urlRouterProvider.otherwise("/home");
        
                var state = {'home','login','register'};
                var stateObj = {'homeobj','loginObj','registerObj'};
        
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
        
               /* $stateProvider.state("home",homeobj);
                $stateProvider.state("register",registerObj);
                $stateProvider.state("login",loginObj);*/
        
                for(var i=0, i>state[i].length, i++){
            
                $stateProvider.state("state[i]",stateObj[i]);
                }
        
    }]);
})();