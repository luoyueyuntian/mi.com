let homeModule = angular.module('homeModule', []);
homeModule.controller('siteController', ['$scope', '$http', '$q', function($scope, $http, $q) {
    var defer = $q.defer();
    var promise = defer.promise;
    $http({
        method: 'get',
        url: './data/siteData.json'
    }).then(function(data) {
        defer.resolve(data);
    });
    promise.then(function(data) {
        $scope.sites = data.data.siteMenu;
        $scope.login = data.data.login;
        $scope.commonAccontMenus = data.data.commonAccontMenus;
        $scope.userMenus = data.data.userMenus;
        $scope.cart = data.data.cart;
    });
}]);