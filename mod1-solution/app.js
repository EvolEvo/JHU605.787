(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.menu = "";
	$scope.response = "";
	$scope.button = "";

	$scope.displayMessage = function() {
		var resultMessage = determineResult($scope.menu);
		$scope.response = resultMessage;

	};

	function determineResult(string) {
		var result = "";
		var items = string.split(",");
		if (items[0] == "") {
			result = "Please enter data first";
		}
		else if (items.length >= 1 && items.length <= 3){
			result = "Enjoy!";
		}
		else {
			result = "Too much!";
		}
		return result;
	}
}
})();