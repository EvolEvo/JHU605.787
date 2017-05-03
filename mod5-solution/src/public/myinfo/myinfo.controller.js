(function() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['ApiPath', 'menuItem', 'registration'];
  function MyInfoController(ApiPath, menuItem, registration) {
    var ctrl = this;

    ctrl.menuItem = menuItem;
    ctrl.registration = registration;
    ctrl.basePath = ApiPath;
  }
})();
