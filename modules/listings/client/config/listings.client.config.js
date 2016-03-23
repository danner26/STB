'use strict';

// Configuring the Articles module
angular.module('listings').run(['Menus',
  function (Menus) {
    // Add the listings dropdown item
    Menus.addMenuItem('topbar', {
<<<<<<< HEAD
      title: 'Event List',
=======
      title: 'Event Listings',
>>>>>>> 722d578cfdab63672d69d668723f22fa8017855c
      state: 'listings.list',
      type: 'item',
      roles: ['*']
    });

    // Add the listings dropdown item
    Menus.addMenuItem('topbar', {
<<<<<<< HEAD
      title: 'Create Event',
=======
      title: 'Post Event Listing',
>>>>>>> 722d578cfdab63672d69d668723f22fa8017855c
      state: 'listings.create',
      type: 'item',
      roles: ['*']
    });

  }
]);
