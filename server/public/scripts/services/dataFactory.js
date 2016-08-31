myApp.factory('DataFactory', ['$http', function($http) {
  // PRIVATE
  var animals = undefined;
  var total= 0;
  var getData = function() {
    console.log('DF getting data from server!');
    var promise = $http.get('/favorites').then(function(response) {

      animals = response.data;
      console.log('DF Async data response: ', animals);
    });
      return promise;
  };

  var addAnimal = function(animal) {
    var promise = $http.post('/favorites', {animal: animal}).then(function(response) {
      console.log('DF post completed');
      return getData();
    });

    return promise;
  }


  var increment = function() {
    console.log('DF getting data from server!');
    var promise = $http.get('/favorites/count').then(function(response) {

      total = response.data;
      console.log('DF Async data response: ', total);
      return total;
    });
      return promise;
  };

  // PUBLIC API object
  return {
    animalsData: function () {
      return animals;
    },
    retrieveData: function () {
      return getData();
    },
    addPet: function(animal) {
      return addAnimal(animal);
    },
    addIncrement: function(){
      var x = increment();
      console.log('x', x);
      return x;
    }
  };

}]);
