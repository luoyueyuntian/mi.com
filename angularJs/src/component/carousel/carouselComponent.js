componentModule.component('carouselConponent', {
    templateUrl: './component/carousel/carouselTpl.html',
    controller: ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        var timeoutId = null;
        $scope.currentIndex = 0;
        $scope.stop = function() {
            $timeout.cancel(timeoutId);
            timeoutId = null;
        };
        $scope.start = start;
        $scope.showImgByIndex = showImgByIndex;
        $scope.showNext = showNext;
        $scope.showPre = showPre;

        function start() {
            timeoutId = $timeout(function() {
                showNext();
                start();
            }, 4000);
        }

        function showNext() {
            var newIndex = $scope.currentIndex + 1;
            var maxIndex = $scope.imgLibary.length - 1;
            while (newIndex > maxIndex) {
                newIndex = newIndex - maxIndex - 1;
            }
            showImgByIndex(newIndex);
        }

        function showPre() {
            var newIndex = $scope.currentIndex - 1;
            var total = $scope.imgLibary.length;
            while (newIndex < 0) {
                newIndex += total;
            }
            showImgByIndex(newIndex);
        }

        function showImgByIndex(index) {
            var len = $scope.imgLibary.length;
            var i;
            for (i = 0; i < len; i++) {
                if (i === index) {
                    $scope.imgLibary[i].showImg = true;
                } else {
                    $scope.imgLibary[i].showImg = false;
                }
            }
            $scope.currentIndex = index;
        }

        $http({
            method: 'get',
            url: './data/banner.json'
        }).then(function(response) {
            $scope.imgLibary = response.data;
            $scope.imgLibary[0].showImg = true;
            start();
        });
    }]
});