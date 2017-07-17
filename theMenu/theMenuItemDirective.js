(function() {
	'use strict';

	angular.module('theMenu').directive('oneMenuItem', [function () {
		return {
			require: '^oneMenu',
			scope: {
				label: '@',
				icon: '@',
				route: '@'	
			},
			templateUrl: 'theMenu/theMenuItemTemplate.html',
			link: function (scope, el, attrs, ctrl) {
				scope.isActive = function () {
					return el === ctrl.getActive();
				}

				el.on('click', function (evt) {
					evt.stopPropagation();
					evt.preventDefault();
					scope.$apply(function () {
						ctrl.setActive(el);
						ctrl.setRoute(scope.route);
					});
				});
			}
		};
	}])

})();