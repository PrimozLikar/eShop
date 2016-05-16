app.controller('productsController', function ($scope, ProductFactory, $stateParams) {
          $scope.products = ProductFactory.getProductsByCategory($stateParams.id);
});