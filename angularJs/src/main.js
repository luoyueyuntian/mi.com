var mainModule = angular.module('mainApp', ['router', 'componentModule', 'homeModule']);
mainModule.run(function($rootScope) {
    $rootScope.sites = [{
        'target': '#',
        'targetName': '小米商城'
    }, {
        'target': '#',
        'targetName': 'MIUI'
    }, {
        'target': '#',
        'targetName': '米聊'
    }, {
        'target': '#',
        'targetName': '游戏'
    }, {
        'target': '#',
        'targetName': '多看阅读'
    }, {
        'target': '#',
        'targetName': '云服务'
    }, {
        'target': '#',
        'targetName': '金融'
    }, {
        'target': '#',
        'targetName': '米币'
    }, {
        'target': '#',
        'targetName': '小米商城手机版'
    }, {
        'target': '#',
        'targetName': '问题反馈'
    }, {
        'target': '#',
        'targetName': 'Select Region'
    }];
    $rootScope.login = true;
    $rootScope.commonAccontMenus = [{
        'name': '登录',
        'target': '#'
    }, {
        'name': '注册',
        'target': '#'
    }, {
        'name': '消息通知',
        'target': '#'
    }];
    $rootScope.userMenus = [{
        'target': '#',
        'name': 'userId',
        'isUserId': true,
        'isActive': false,
        'showChildMenu': false,
        'childMenu': [{
            'target': '#',
            'name': '个人中心'
        }, {
            'target': '#',
            'name': '晒单评价'
        }, {
            'target': '#',
            'name': '我的喜欢'
        }, {
            'target': '#',
            'name': '小米账户'
        }, {
            'target': '#',
            'name': '退出登录'
        }]
    }, {
        'target': '#',
        'name': '消息通知'
    }, {
        'target': '#',
        'name': '我的订单'
    }];
    $rootScope.cart = {
        'number': 1,
        'goodsList': [{
            'imgSrc': './assert/img/pms_1502863444.33472153.jpg',
            'describ': '小米Max2 全网通版 4GB内存 金色 32GB',
            'price': 1450,
            'number': 1
        }],
        'totalPrice': 1450,
        'showCart': false
    };

})