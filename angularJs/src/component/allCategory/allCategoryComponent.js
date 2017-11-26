var componentModule = null;
try {
    componentModule = angular.module('componentModule');
} catch (e) {
    componentModule = angular.module('componentModule', []);
}
componentModule.component('allCategoryComponent', {
    templateUrl: './component/allCategory/allCategoryTpl.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $scope.bgColorCls = 'category-container gray-bg';
        $http({
            method: 'get',
            url: './data/allProduct.json'
        }).then(function(response) {
            $scope.allCategory = resolveCategoryData(response.data);
        });

        function groupGoods(goodsLibary) {
            var length = goodsLibary.length;
            var groupCount = length / 6;
            var i;
            var newGoodsLibary = [];
            for (i = 0; i < groupCount; i++) {
                if (i * 6 <= length - 6) {
                    newGoodsLibary.push(goodsLibary.splice(0, 6));
                } else {
                    newGoodsLibary.push(goodsLibary.splice(0, goodsLibary.length));
                }
            }
            var columnLength = (parseInt(length / 6) === length / 6) ? (length / 6) : parseInt(length / 6) + 1;
            newGoodsLibary.className = 'goods-container column-' + columnLength;
            return newGoodsLibary;
        }

        function resolveCategoryData(categoryData) {
            var length = categoryData.length;
            var i;
            for (i = 0; i < length; i++) {
                categoryData[i].showGoodsContainer = false;
                var goodsLibrary = categoryData[i].productArr;
                categoryData[i].goodsLibrary = groupGoods(goodsLibrary);
                delete categoryData[i].productArr;
            }
            return categoryData;
        }

        $scope.showGoodsList = function(category) {
            category.showGoodsContainer = true;
        };

        $scope.hideGoodsList = function(category) {
            category.showGoodsContainer = false;
        };
    }]
});