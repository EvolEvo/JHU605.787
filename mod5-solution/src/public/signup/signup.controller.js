(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'SignupService'];
  function SignupController(MenuService, SignupService) {
    var ctrl = this;
    ctrl.menuItemIsValid = false;

    ctrl.signup = function() {
      SignupService.register(ctrl.registration);
      ctrl.completed = true;
    };

    ctrl.verifyMenuItem = function() {

        MenuService.getMenuItem(ctrl.registration.menuItem)
        .then(function(response) {
          ctrl.menuItemIsValid = true;
          $scope.signupForm.menuItem.$invalid = false;
        })
        .catch(function(response) {
          $scope.signupForm.menuItem.$invalid = true;
        });
      
    };
  }
})();
