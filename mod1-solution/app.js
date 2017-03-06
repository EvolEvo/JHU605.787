(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
	$scope.menu = "";
	$scope.response = "This is the message";
	$scope.button = "";

	$scope.displayMessage = function() {
		var resultMessage = determineResult($scope.menu);
		$scope.response = resultMessage;

	};

	function determineResult(string) {
		var result = "";
		var items = string.split(",");
		if (items.length< 1) {
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
}); 
})();