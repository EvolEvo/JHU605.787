(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
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

		var list = this;
		list.getItems = function(searchTerm) {

			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

			promise.then(function(response) {
				list.items = response;
			})
			.catch(function(error) {
				console.log("Something went terribly wrong!");
			});
		};

			list.removeItem = function (index) {
				MenuSearchService.removeItem(index);
			};
		
	}

	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;
		service.foundItems = [];
		service.getMatchedMenuItems = function (searchTerm) {

			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json")
			}).then(function (result) {
		    
		    var menuItems = result.data.menu_items;

		    for(var i = 0; i < menuItems.length; i++) {
		    	if(menuItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
		    		service.foundItems.push(menuItems[i]);
		    	}
		    }

		    return service.foundItems;
			});
		};

		service.removeItem = function(item) {
			service.foundItems.splice(item, 1);
                };
	}

})();