DragonApp.config([
    '$routeProvider',
    function ($routeProvider){
        $routeProvider

            .when('/cart', {
                templateUrl: '/static/partials/cart.html',
                controller: 'cartCtrl',
            })

            .when('/payment', {
                templateUrl: '/static/partials/payment.html',
                controller: 'paymentCtrl',
            })

            .otherwise({
                templateUrl: '/static/partials/main.html',
                controller: 'mainCtrl',
            })
}]);