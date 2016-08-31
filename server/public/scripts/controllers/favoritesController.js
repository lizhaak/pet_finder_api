myApp.controller('FavoritesController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  $scope.dataFactory = DataFactory;
  $scope.message = 'Favorite Animals!';
  $scope.animals = [];
  $scope.faveCount = 0;


  if($scope.dataFactory.animalsData() === undefined) {
    console.log('factory has no data, getting it now.');
    $scope.dataFactory.retrieveData().then(function() {
      $scope.animals = $scope.dataFactory.animalsData();
      $scope.faveCount = $scope.dataFactory.addIncrement();
    });
  } else {
    $scope.animals = $scope.dataFactory.animalsData();
    $scope.faveCount = $scope.dataFactory.addIncrement();
  }



}]);
