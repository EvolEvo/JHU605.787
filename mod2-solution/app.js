(function() {
'use strict';
	
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var showToBuy = this;
	showToBuy.items = ShoppingListCheckOffService.getItems();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

	var showAlreadyBought = this;
	showAlreadyBought.items = ShoppingListCheckOffService.getItems();
}

function ShoppingListCheckOffService() {

	var toBuy = [];
	var bought = [];

//	service.addItem = function (itemName, quantity)
}

})();