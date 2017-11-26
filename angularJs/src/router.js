angular.module('router', ['ui.router'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: './home/tpl/home.html'
        });
        $urlRouterProvider.otherwise('/home');
    }]);