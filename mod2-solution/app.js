(function() {
'use strict';
	
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	toBuy.items = ShoppingListCheckOffService.getToBuy();
	toBuy.buy = function (item) {
		ShoppingListCheckOffService.buy(item);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

	var alreadyBought = this;
	alreadyBought.items = ShoppingListCheckOffService.getAlreadyBought();
	alreadyBought.calculateTotal = function() {
		ShoppingListCheckOffService.calculateTotal();
	}
}

function ShoppingListCheckOffService() {
	var service = this;

	var toBuy = [
		{name: "Cookies", pricePerItem: .50, quantity: 10},
		{name: "Chicken", pricePerItem: 2.49, quantity: 2},
		{name: "Eggs", pricePerItem: 2.20, quantity: 1},
		{name: "Milk", pricePerItem: 3.49, quantity: 1},
		{name: "Bread", pricePerItem: 3.99, quantity: 2}
	];
	var alreadyBought = [];

	service.getToBuy = function () {
		return toBuy;
	};

	service.getAlreadyBought = function() {
		return alreadyBought;
	};

	service.buy = function(item) {
		var itemIndex = toBuy.indexOf(item);
		toBuy.splice(itemIndex, 1);
		alreadyBought.push(item);

	};

	service.calculateTotal = function() {
		return item.pricePerItem * item.quantity;
	}

//	service.addItem = function (itemName, quantity)
}

})();