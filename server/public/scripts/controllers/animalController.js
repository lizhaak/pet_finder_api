myApp.controller('AnimalController', ['$scope', '$http', '$location', 'DataFactory', function($scope, $http, $location, DataFactory) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';
  $scope.animal = [];
  $scope.faveAnimal = "";
  $scope.dataFactory = DataFactory;
  $scope.faveCount = 0;
  $scope.faveCount = $scope.dataFactory.addIncrement();



  $scope.animalType = [
    {type: 'barnyard', display: 'Barnyard Animal'},
    {type: 'bird', display: 'Bird'},
    {type: 'cat', display: 'Cat'},
    {type: 'dog', display: 'Dog'},
    {type: 'horse', display: 'Horse'},
    {type: 'pig', display: 'Pig'},
    {type: 'reptile', display: 'Reptile'},
    {type: 'smallfurry', display: 'Small Furry Animal'},
  ];

  // console.log('http: ', $http);
  $scope.selectAction = function() {
    console.log('selectedAnimal: ', $scope.selectedAnimal.type);
    $scope.animalSelected = $scope.selectedAnimal.type;
    getRandomPet($scope.animalSelected);
  }

  // $scope.animal = [];
  function getRandomPet(animal) {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=' + animal;
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log('request animal: ', response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
        console.log('faveAnimal: ', $scope.faveAnimal);
      }
    )
  }

    function Pet(id, name, imageurl, description) {
      this.id = id;
      this.name = name;
      this.imageurl = imageurl;
      var comment = description;
      if (comment == "" || comment == undefined) {
        comment = "no description";
      }
      if (comment.length > 100) {
        comment = comment.substring(0, 100);
      }
      this.description = comment;
    }

    // var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);


  $scope.addToFavorites = function () {
    console.log('add this pet to favorites...');
    $scope.dataFactory.addPet($scope.faveAnimal).then(function(response) {
      $scope.animals = $scope.dataFactory.animalsData();
    });
  }

  // $scope.addToFavorites = function() {
  //   console.log('clicked addToFavorites');
  //   console.log('$scope.animal: ', $scope.animal);
  //   $scope.faveCounter++;
  //   console.log('scope.faveCounter++: ', $scope.faveCounter);
  //
  //   function Pet(id, name, imageurl, description) {
  //     this.id = id;
  //     this.name = name;
  //     this.imageurl = imageurl;
  //     var comment = description;
  //     if (comment == "" || comment == undefined) {
  //       comment = "no description";
  //     }
  //     if (comment.length > 100) {
  //       comment = comment.substring(0, 100);
  //     }
  //     this.description = comment;
  //   }
  //
  //   var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
  //
  //   $http.post('/favorites', faveAnimal)
  //     .then(function() {
  //     console.log("Added to Favorites!");
  //     $scope.getFavorites();
  //   });
  // }
  //
  //   $scope.getFavorites = function () {
  //     $http.get('/favorites')
  //       .then(function(response) {
  //         console.log('GET response: ', response);
  //       });
  //   }
}]);
