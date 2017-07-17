(function() {
	'use strict';

	angular.module('theMenu').controller('theMenuController',
		['$scope',
			 function ($scope) {
				this.setActive = function () {
					return $scope.active;
				};


				this.setActive = function (el) {
					$scope.active = el;
				};

				this.setRoute = function (route) {
					$routeScope.$broadcast('the-menu-item-selected-event', { route: route});
				};
	}])

})();