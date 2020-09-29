DragonApp.controller('mainCtrl',[
	'$scope',
	'dragonService',
	function ($scope, dragonService){
		$scope.itemList = [];
		$scope.formatter = new Intl.NumberFormat('en-US');
		
		$scope.addToCart = function(item){
			dragonService.addToCart(item.id);
			loadItemData();
		}

		function loadItemData(){
			$scope.itemList = dragonService.getItems();
		}


		loadItemData();
	}
]);