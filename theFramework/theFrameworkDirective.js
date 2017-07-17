(function() {
	'use strict';

	angular.module('theFramework').directive('oneFramework', function () {
		return {
			transclude: true,
			scope: {
				title: '@',
				subtitle: '@',
				iconFile: '@', 
			},
			controller: 'theFrameworkController',
			templateUrl: 'theFramework/theFrameworkTemplate.html'
		};
	});

})();