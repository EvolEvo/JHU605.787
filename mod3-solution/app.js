(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService);
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");
	.directive('foundItemsList', FoundItemsDirective);

	function FoundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItemsList.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'list',
			bindToController: true
		};
		return ddo;
	}

	function FoundItemsDirectiveController() {
		var list = this;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {

		var ndController = this;

		ndController.searchTerm = "";
		ndController.found = [];
		
	}

	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;

		service.getMatchedMenuItems(searchTerm) {
			return $http.get(ApiBasePath).then(function (result) {
				//var foundItems..

				//...

				//return foundItems
			});

		}



	};

})();