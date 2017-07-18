(function () {
	'use strict'

	angular.module('app').config(function ($provide) {
		$provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
				return function (exeption, cause){
					$delegate(exception, cause);
					//alert(exception.message);
				};
		}]); 
	});
})();