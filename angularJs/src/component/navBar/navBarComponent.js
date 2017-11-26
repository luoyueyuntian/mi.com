var componentModule = null;
try {
    componentModule = angular.module('componentModule');
} catch (e) {
    componentModule = angular.module('componentModule', []);
}
componentModule.component('navBar', {
    templateUrl: './component/navBar/navBarTpl.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $scope.home = {
            imgSrc: './assert/img/mi-logo.png'
        };
        $scope.allMenuInfo = {
            name: '全部商品分类',
            target: '#'
        };
        $scope.isHome = true;
        $scope.showAllProductMenu = false;
        $scope.allProductMenu = [];
        if ($scope.isHome) {
            $scope.showAllProductMenu = true;
        }
        $scope.showRootMenu = function() {
            if (!$scope.isHome === true) {
                $scope.showAllProductMenu = true;
            }
        };
        $scope.hideRootMenu = function() {
            if (!$scope.isHome === true) {
                $scope.showAllProductMenu = false;
            }
        };
        $scope.showChildNavContainer = function(product) {
            if (product.adviseProduct.length > 0) {
                product.showChildNav = true;
            }
        }
        $scope.hideChildNavContainer = function(product) {
            if (product.adviseProduct.length > 0) {
                product.showChildNav = false;
            }
        }
        $http({
            method: 'get',
            url: './data/navProduct.json'
        }).then(function(response) {
            $scope.navProduct = response.data;
        });
        $http({
            method: 'get',
            url: './data/allProduct.json'
        }).then(function(response) {
            $scope.allProductMenu = response.data;
        })
    }]
})