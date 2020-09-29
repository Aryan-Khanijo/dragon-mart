DragonApp.controller('cartCtrl',[
	'$scope',
	'dragonService',
	function ($scope, dragonService){
		$scope.cartList = [];
		$scope.formatter = new Intl.NumberFormat('en-US');

		$scope.amount = dragonService.getTotalAmt();
		
		$scope.inc = function (item){
			dragonService.inc(item.id)
			init();
		}

		$scope.dec = function (item){
			dragonService.dec(item.id)
			init();
		}

		function init(){
			$scope.cartList = dragonService.getCartItems();
		}

		init();

	}
]);