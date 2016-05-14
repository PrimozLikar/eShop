//  Add ui-router as a dependency
var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngResource']);

app.controller('isActiveController', function($scope, $location){

	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};

});