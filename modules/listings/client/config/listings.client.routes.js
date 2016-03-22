'use strict';

// Setting up route
angular.module('listings').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('listings', {
        abstract: true,
        url: '/listings',
        template: '<ui-view/>'
      })
      .state('listings.list', {
        url: '',
        templateUrl: 'modules/listings/client/views/list-listings.client.view.html'
      })
      .state('listings.create', {
        url: '/create',
        templateUrl: 'modules/listings/client/views/create-listing.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('listings.view', {
        url: '/:listingId',
        templateUrl: 'modules/listings/client/views/view-listing.client.view.html'
      })
      .state('listings.edit', {
        url: '/:listingId/edit',
        templateUrl: 'modules/listings/client/views/edit-listing.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
