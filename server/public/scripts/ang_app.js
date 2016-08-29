var myApp = angular.module('myApp', ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/home", {
      templateUrl: "/views/partials/home.html",
      controller: "AnimalController"
    }).
    when("/barnyard", {
      templateUrl: "/views/partials/barnyard.html",
      controller: "barnyardController"
    }).
    when("/bird", {
      templateUrl: "/views/partials/bird.html",
      controller: "birdController"
    }).
    when("/cat", {
      templateUrl: "/views/partials/cat.html",
      controller: "catController"
    }).
    when("/dog", {
      templateUrl: "/views/partials/dog.html",
      controller: "dogController"
    }).
    when("/horse", {
      templateUrl: "/views/partials/horse.html",
      controller: "horseController"
    }).
    when("/pig", {
      templateUrl: "/views/partials/pig.html",
      controller: "pigController"
    }).
    when("/reptile", {
      templateUrl: "/views/partials/reptile.html",
      controller: "reptileController"
    }).
    when("/smallfurry", {
      templateUrl: "/views/partials/smallfurry.html",
      controller: "smallfurryController"
    }).
    when("/test", {
      templateUrl: "/views/partials/test.html",
      controller: "pickController"
    }).
    otherwise({
      redirectTo: "/home"
    });

}]);

myApp.controller('AnimalController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.animalType = ['barnyard', 'bird', 'cat', 'dog', 'horse', 'pig', 'reptile', 'smallfurry'];
  console.log('http: ', $http);
  $scope.selectAction = function() {
    console.log($scope.selectedAnimal);
    $location.path("/" + $scope.selectedAnimal);
  }
}]);


myApp.controller('barnyardController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }



}]);

myApp.controller('birdController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=bird';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);

myApp.controller('catController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);

myApp.controller('dogController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);

myApp.controller('horseController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=horse';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);

myApp.controller('pigController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=pig';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);

myApp.controller('reptileController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=reptile';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);

myApp.controller('smallfurryController', ['$scope', '$http', function($scope, $http) {
  var key = '6a55deefc1db87940051b82878df62d7';
  var baseURL = 'http://api.petfinder.com/';

  getRandomPet();

  function getRandomPet() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=smallfurry';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);
