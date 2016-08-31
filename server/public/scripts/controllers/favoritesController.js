myApp.controller('FavoritesController', ['$scope', '$location', 'DataFactory', function($scope, $location, DataFactory) {
  $scope.dataFactory = DataFactory;
  $scope.message = 'Favorite Animals!';
  $scope.animals = [];
  $scope.faveCount = 0;



  if($scope.dataFactory.animalsData() === undefined) {
    console.log('factory has no data, getting it now.');
    $scope.dataFactory.retrieveData().then(function() {
      $scope.animals = $scope.dataFactory.animalsData();
      $scope.faveCount = $scope.dataFactory.addIncrement();
      console.log('$scope.animals1:', $scope.animals);
    });
  } else {
    console.log('this is running');
    $scope.animals = $scope.dataFactory.animalsData();
    $scope.faveCount = $scope.dataFactory.addIncrement();
    console.log('$scope.animals2:', $scope.animals);
  }

  $scope.goHome = function () {
    $location.path("/favorites");
  }


}]);
