DragonApp.controller('paymentCtrl',[
	'$scope',
	'dragonService',
	'$mdDialog',
	function ($scope, dragonService, $mdDialog){
		$scope.finalList = [];
		$scope.formatter = new Intl.NumberFormat('en-US');

		function init(){
			$scope.finalList = dragonService.getCartItems();
		}

		$scope.Tamount = dragonService.getTotalAmt();

		$scope.showAlert = function (ev) {
			$mdDialog.show(
			  $mdDialog.alert()
				.parent(angular.element(document.querySelector('#pay')))
				.clickOutsideToClose(true)
				.title('Thank You For Shopping')
				.textContent(`Your final amount is ${$scope.formatter.format($scope.Tamount)}`)
				.ariaLabel('Thanks')
				.ok('ok')
				.targetEvent(ev)
			);
		  };

		init();
	}
]);