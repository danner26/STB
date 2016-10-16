'use strict';

//Articles service used for communicating with the listings REST endpoints
angular.module('listings').factory('Listings', ['$resource',
  function($resource) {
    return $resource('api/listings/:listingId', {
      listingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
