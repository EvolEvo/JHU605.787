(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];
	function CategoriesController(categories) {
		var list = this;
		list.categories = categories;
	}
})();