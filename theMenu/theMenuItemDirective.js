(function() {
	'use strict';

	angular.module('theMenu').directive('oneMenuItem', [function () {
		return {
			require: '^theMenu',
			scope: {
				label: '@',	
			},
			templateUrl: 'theMenu/theMenuTemplate.html',
			link: function (scope, iElement, iAttrs, iCtrl) {
				
			}
		};
	}])

})();