angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://assignment4321.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('http://assignment4321.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
	return $http.delete('http://assignment4321.herokuapp.com/api/listings', id);
    }
  };

  return methods;
});
