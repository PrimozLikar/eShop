app.directive('mainNavigation', function($scope){

	return{
      restrict:'EA',
      templateUrl:'/templates/navigation.html',
        controller:'isActiveController'
    };

});