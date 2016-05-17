app.controller('productsController', function ($scope, ProductFactory, $stateParams) {
    
    var products = [];
    products = ProductFactory.getProducts();
    
    $scope.getProducts = function()
    {
        return products;
    };
    
});