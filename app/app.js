var app = angular.module('app',['ui.router']);
 
app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
   $stateProvider
      .state('home',{
         url:'/home',
         templateUrl:'app/views/home.html',
         controller:'HomeCtrl'
      })
      .state('about', {
         url:'/about',
         templateUrl : 'app/views/about.html',
         controller  : 'AboutCtrl'
      })
      .state('contact', {
         url: '/contact',
         templateUrl : 'app/views/contact.html',
         controller  : 'ContactCtrl',
      })
      $urlRouterProvider.otherwise('home');
 
}]); 