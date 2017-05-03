(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://fullstack-course5.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
