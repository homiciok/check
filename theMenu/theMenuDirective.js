(function() {
	'use strict';

	angular.module('theMenu').directive('oneMenu', [function () {
		return {
			transclude: true,
			scope: {

			},
			controller: 'theMenuController',
			templateUrl: 'theMenu/theMenuTemplate.html',
			link: function (scope, iElement, iAttrs) {
				
			}
		};
	}])

})();