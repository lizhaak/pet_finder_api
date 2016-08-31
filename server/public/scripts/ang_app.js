var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/home", {
      templateUrl: "/views/partials/home.html",
      controller: "AnimalController"
    }).
    when("/favorites", {
      templateUrl: "/views/partials/favorites.html",
      controller: "FavoritesController"
    }).
    otherwise({
      redirectTo: "/home"
    });

}]);



// 
//
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 100);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function() {
//       console.log("Added to Favorites!");
//       $scope.getFavorites();
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//       });
//   }
//
//
// }]);
//
// myApp.controller('birdController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//
//   getRandomPet();
//   getCount();
//
//   function getRandomPet() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=bird';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//       }
//     )
//   }
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 99);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function(response) {
//         if(response.status == 201) {
//           console.log('saved favorite');
//           $scope.getFavorites();
//         } else {
//           console.log('POST failed');
//         }
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//         getCount();
//       });
//   }
//
//   function getCount() {
//     $http.get('/favorites/count')
//       .then(function(response) {
//         console.log('GET COUNT response: ', response);
//         $scope.favCount = response.data.count;
//       });
//   }
//
// }]);
//
// myApp.controller('catController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//   // var faveCounter = 0;
//
//   getRandomPet();
//
//   function getRandomPet() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=cat';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//       }
//     )
//   }
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 100);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function() {
//       console.log("Added to Favorites!");
//       $scope.getFavorites();
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//       });
//   }
//
// }]);
//
// myApp.controller('dogController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//
//   getRandomPet();
//
//   function getRandomPet() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=dog';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//       }
//     )
//   }
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 100);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function() {
//       console.log("Added to Favorites!");
//       $scope.getFavorites();
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//       });
//   }
//
// }]);
//
// myApp.controller('horseController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//
//   getRandomPet();
//
//   function getRandomPet() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=horse';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//       }
//     )
//   }
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 100);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function() {
//       console.log("Added to Favorites!");
//       $scope.getFavorites();
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//       });
//   }
//
// }]);
//
// myApp.controller('pigController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//
//   getRandomPet();
//
//   function getRandomPet() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=pig';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//       }
//     )
//   }
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 100);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function() {
//       console.log("Added to Favorites!");
//       $scope.getFavorites();
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//       });
//   }
//
// }]);
//
// myApp.controller('reptileController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//
//   getRandomPet();
//
//   function getRandomPet() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=reptile';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//       }
//     )
//   }
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 100);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function() {
//       console.log("Added to Favorites!");
//       $scope.getFavorites();
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//       });
//   }
// }]);
//
// myApp.controller('smallfurryController', ['$scope', '$http', function($scope, $http) {
//   var key = '6a55deefc1db87940051b82878df62d7';
//   var baseURL = 'http://api.petfinder.com/';
//
//   getRandomPet();
//
//   function getRandomPet() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=smallfurry';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//       }
//     )
//   }
//
//   $scope.addToFavorites = function() {
//     console.log('clicked addToFavorites');
//     console.log('$scope.animal: ', $scope.animal);
//     $scope.faveCounter++;
//     console.log('scope.faveCounter++: ', $scope.faveCounter);
//
//     function Pet(id, name, imageurl, description) {
//       this.id = id;
//       this.name = name;
//       this.imageurl = imageurl;
//       var comment = description;
//       if (comment == "" || comment == undefined) {
//         comment = "no description";
//       }
//       if (comment.length > 100) {
//         comment = comment.substring(0, 100);
//       }
//       this.description = comment;
//     }
//
//     var faveAnimal = new Pet($scope.animal.id.$t, $scope.animal.name.$t, $scope.animal.media.photos.photo[2].$t, $scope.animal.description.$t);
//
//     $http.post('/favorites', faveAnimal)
//       .then(function() {
//       console.log("Added to Favorites!");
//       $scope.getFavorites();
//     });
//   }
//
//   $scope.getFavorites = function () {
//     $http.get('/favorites')
//       .then(function(response) {
//         console.log('GET response: ', response);
//       });
//   }
// }]);
