(function() {
	'use strict';

	angular.module('theMenu').controller('theMenuController',
		['$scope', '$rootScope',
			 function ($scope, $rootScope) {
				this.setActiveElement = function () {
					return $scope.activeElement;
				};


				this.setActiveElement = function (iElement) {
					$scope.activeElement = iElement;
				};

				this.setRoute = function (route) {
					$rootScope.$broadcast('the-menu-item-selected-event', 
						{ route: route });
				};
	}]);

})();