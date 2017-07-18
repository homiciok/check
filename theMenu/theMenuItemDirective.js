(function() {
	'use strict';

	angular.module('theMenu').directive('oneMenuItem', [function () {
		return {
			require: '^oneMenu',
			scope: {
				label: '@',
				icon: '@',
				route: '@',	
			},
			templateUrl: 'theMenu/theMenuItemTemplate.html',
			link: function (scope, iElement, iAttrs, controller) {
				scope.isActiveElement = function () {
					return iElement === controller.getActiveElement();
				};

				iElement.on('click', function (evt) {
					evt.stopPropagation();
					evt.preventDefault();
					scope.$apply(function () {
						controller.setActiveElement(iElement);
						controller.setRoute(scope.route);
					});
				});
			},
		};
	}]);

})();
