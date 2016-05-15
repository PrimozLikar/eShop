app.controller('productController', function ($scope, ProductFactory, $stateParams) {
    $scope.product = ProductFactory.getProduct($stateParams.id);
});