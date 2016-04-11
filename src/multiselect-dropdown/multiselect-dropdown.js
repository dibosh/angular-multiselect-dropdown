(function () {
	'use strict';

	angular.module('dibosh.angular-multiselect-dropdown', []);

	angular
		.module('dibosh.angular-multiselect-dropdown')
		.directive('mdMultiselectDropdown', MultiSelectDropdown);

	/** @ngInject */
	function MultiSelectDropdown() {
		return {
			restrict: 'E',
			templateUrl: 'multiselect-dropdown.html',
			replace: true,
			scope: {
				label: '@',
				options: '=',
				selectedOptions: '=',
				nameKey: '@',
				imageKey: '@',
				loadingItems: '=',
				onAddCallback: '&',
				onRemoveCallback: '&'
			},
			link: function (scope) {
				scope.selectedOptions = scope.selectedOptions || [];

				scope.showFilter = function () {
					return _.isArray(scope.options) && !_.isEmpty(scope.options);
				};

				scope.selectOption = function (value) {
					scope.options.splice(_.indexOf(scope.options, value), 1);
					scope.selectedOptions.push(value);
					scope.search = '';
					scope.onAddCallback(value);
				};

				scope.deselectOption = function (value) {
					scope.selectedOptions.splice(_.indexOf(scope.selectedOptions, value), 1);
					scope.options.push(value);
					scope.onRemoveCallback(value);
				};
			}
		};
	}
})();