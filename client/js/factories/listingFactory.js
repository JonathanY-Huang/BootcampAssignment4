angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://assignment4321.herokuapp.com/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://assignment4321.herokuapp.com/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
	return $http.delete('https://assignment4321.herokuapp.com/listings', id);
    }
  };

  return methods;
});
