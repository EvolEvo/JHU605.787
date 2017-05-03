(function() {
  'use strict';

  angular.module('public')
  .service('SignupService', SignupService);

  SignupService.$inject = ['$http'];
  function SignupService($http) {
    var service = this;

    service.register = function(userInfo) {
      service.registration = userInfo;
    };

    service.getRegistration = function() {
      return service.registration;
    };
  }
})();
