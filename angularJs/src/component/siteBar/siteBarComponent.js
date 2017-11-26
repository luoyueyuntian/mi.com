var componentModule = null;
try {
    componentModule = angular.module('componentModule');
} catch (e) {
    componentModule = angular.module('componentModule', []);
}
componentModule.component('siteBar', {
    templateUrl: './component/siteBar/siteBarTpl.html',
    controller: ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.sites = $rootScope.sites;
        $scope.login = $rootScope.login;
        $scope.commonAccontMenus = $rootScope.commonAccontMenus;
        $scope.userMenus = $rootScope.userMenus;
        $scope.cart = $rootScope.cart;
        $scope.showSubmenu = function(menu) {
            menu.showChildMenu = true;
            menu.isActive = true;
        };
        $scope.hideSubmenu = function(menu) {
            menu.showChildMenu = false;
            menu.isActive = false;
        };
        $scope.showCart = function() {
            $scope.cart.showCart = true;
        };
        $scope.hideCart = function() {
            $scope.cart.showCart = false;
        }
    }]
})