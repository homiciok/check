(function() {
	'use strict';

	angular.module('theFramework').controller('theFrameworkController', 
		['$scope', '$window', '$timeout', '$rootScope',
			function ($scope, $window, $timeout, $rootScope) {
				
				$scope.isMenuVisible = true;
				$scope.isMenuButtonVisible = true;

				$scope.$on('the-menu-item-selected-event', function (evt, data) {
					$scope.routeString = data.route;
					checkWidth();
					broadcastMenuState();	
				});	

				$($window).on('resize.theFramework', function () {
					$scope.$apply(function () {
						checkWidth();
						broadcastMenuState();
					});
				});

				$scope.$on('$destroy', function () {
					$($window).off('resize.theFramework');
				});

				var checkWidth = function () {
					var width = Math.max($($window).width(), $window.innerWidth);
					$scope.isMenuVisible = (width > 768);
					$scope.isMenuButtonVisible = !$scope.isMenuVisible;
				};

				$scope.menuButtonClicked = function () {
					$scope.isMenuVisible = !$scope.isMenuVisible;
					broadcastMenuState();
					$scope.apply;
				}

				var broadcastMenuState = function () {
					$rootScope.$broadcast('the-menu-show', {
						show: $scope.isMenuVisible
					});
				};

				$timeout(function () {
					checkWidth();
				}, 0);

		}]);

})();