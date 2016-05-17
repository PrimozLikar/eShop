//  Add ui-router as a dependency
var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngResource']);

app.controller('isActiveController', function($scope, $location){

	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};

});
app.config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home',
	{
		url: '/home',
		template: '<h1>Doma smo</h1>'
	});
    
    $stateProvider.state('error',
	{
		url: '/error',
		template: '<h2>Error 404 al neki</h2>'
	});
    
	$stateProvider.state('category',
	{
		url: '/category/:id',
		templateUrl: 'templates/categoryProducts.html',
        controller: 'productsController'
	});
    
	$stateProvider.state('products',
	{
		url: '/products',
		templateUrl: 'templates/products.html',
        controller: 'productsController'
	});
    
    $stateProvider.state('detail',
	{
		url: '/products/:id',
		templateUrl: 'templates/product.html',
        controller: 'productController'
	});
    
    
    $stateProvider.state('category_products',
	{
		url: '/category_products/:id',
		templateUrl: 'templates/products.html',
        controller: 'productsController'
	});
    
    $stateProvider.state('about',
	{
		url: '/about',
		template: '<h1>Products</h1>'
	});    

	$stateProvider.state('profile',
	{
		url: '/profile',
		template: '<h1>Your Profile <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
	});

	$stateProvider.state('profile.login', 
	{
		url: '/login',
		template: '<div class="well"><h4>Login</h4></div>'
	})
    
	$stateProvider.state('profile.setup', 
	{
		url: '/setup',
		template: '<div class="well"><h4>Profile Settings</h4></div>'
	})
    
	$stateProvider.state('profile.cart', 
	{
		url: '/cart',
		template: '<div class="well"><h4>Cart</h4></div>'
	})
    
	$stateProvider.state('parameter', {
		url: '/parameter/:name',
		template: '<h1>Parameter state with a name parameter</h1><p>Name is : {{ name }}</p>',
		controller: function($scope, $stateParams, $state){
            //  Use $stateParams to get url parameters
            $scope.name = $stateParams.name;

            //  If you want to redirect to a state
            //  $state.go('login');

            //  If you want to reload a state
			//  $state.reload();

            //  Check if the current active state is...
            //if($state.is('prva'))
            // $state.is('login');
		}
	});

});


app.controller('categoryController', function ($scope, CategoryFactory) {
          $scope.categories = CategoryFactory.query({});
});
app.factory('CategoryFactory', function ($resource) {

    return $resource('http://smartninja.betoo.si/api/eshop/categories');
    
});
app.directive('mainCategories', function(){

	return{
      restrict:'EA',
      templateUrl:'templates/main.categories.html',
      controller:'categoryController' 
    };

});



app.directive('mainNavigation', function(){

	return{
      restrict:'EA',
      templateUrl:'templates/main.navigation.html',
      controller:'isActiveController' 
    };

});



app.controller('productController', function ($scope, ProductFactory, $stateParams) {
    
    $scope.geProduct = function($stateParams) {
        return ProductFactory.getProduct($stateParams.id);
    };
    
    $scope.geProducts = function() {
        //var result = [];
        //result = ProductFactory.getProducts();
        //console.log(result);
        //return result;
        //$scope.products = ProductFactory.getProducts();
        return ProductFactory.getProducts();
    };
    
    $scope.geProductsByCategory = function($stateParams) {
        return ProductFactory.getProducts($stateParams.id);
    };
    
});
angular.module('app').factory('ProductFactory', 

function ($resource) {

    return {
        getProducts:getProducts,
        getProduct:getProduct
    }
    
    function getProducts(){
        
            return $resource('http://smartninja.betoo.si/api/eshop/products').query({});   

    };  
    
    /*
    function getProducts(categor_id){
        if (categor_id == null) {
            return $resource('http://smartninja.betoo.si/api/eshop/products').query({});
        }
        else {
            return $resource('http://smartninja.betoo.si/api/eshop/categories/' + category_id.toString() +'/products').query({});    
        }
    };    */
    
    function getProduct(id){
        if (id != "undefined") {
            return $resource('http://smartninja.betoo.si/api/eshop/products/' + id.toString()).get({});
        }
    };    
    
    
});
app.controller('productsController', function ($scope, ProductFactory, $stateParams) {
    
    var products = [];
    products = ProductFactory.getProducts();
    
    $scope.getProducts = function()
    {
        return products;
    };
    
});