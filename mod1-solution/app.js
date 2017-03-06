(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.menu = "";
	$scope.message = "";
	$scope.button = "";

	$scope.displayMessage = function() {
		var resultMessage = determineResult($scope.menu);
		$scope.message = resultMessage;

	};

	function determineResult(string) {
		var result = "";
		var items = string.split(",");
		if (items[0] == "") {
			result = "Please enter data first";
		}
		else if (items.length >= 1 && items.length <= 3){
			result = "Enjoy!";
			$scope.color = "green";
			$scope.border = "green-border";
		}
		else {
			result = "Too much!";
			$scope.color = "red";
			$scope.border = "red-border";
		}
		return result;
	}
}
})();