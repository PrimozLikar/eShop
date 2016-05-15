app.controller('productsController', function ($scope, ProductFactory) {
          $scope.products = ProductFactory.getProducts();
});