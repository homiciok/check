(function() {
	'use strict';

	angular.module('theFramework').controller('theFrameworkController', 
		['$scope', 
			function ($scope) {
				$scope.$on('the-menu-item-selected-event', function (evt, data) {
					$scope.routeString = data.route;	
				});	
	}]);

})();