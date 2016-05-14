app.controller('categoryController', function ($scope, CategoryFactory) {
          $scope.categories = CategoryFactory.query({});
});