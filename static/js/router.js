DragonApp.config([
    '$routeProvider',
    function ($routeProvider){
        $routeProvider

            .when('/cart', {
                templateUrl: '/static/js/partials/cart.html',
                controller: 'cartCtrl',
            })

            .when('/payment', {
                templateUrl: '/static/js/partials/payment.html',
                controller: 'paymentCtrl',
            })

            .otherwise({
                templateUrl: '/static/js/partials/main.html',
                controller: 'mainCtrl',
            })
}]);