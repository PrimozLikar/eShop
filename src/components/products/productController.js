app.controller('productController', function ($scope, ProductFactory, $stateParams) {
    
    
    $scope.product = ProductFactory.getProduct($stateParams.id);
    
    $scope.products = ProductFactory.getProducts($stateParams.id);
    
    
    /*
    
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
    };*/
    
});