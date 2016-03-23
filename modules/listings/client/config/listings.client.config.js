'use strict';

// Configuring the Articles module
angular.module('listings').run(['Menus',
  function (Menus) {
    // Add the listings dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Event List',
      state: 'listings.list',
      type: 'item',
      roles: ['*']
    });

    // Add the listings dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Create Event',
      state: 'listings.create',
      type: 'item',
      roles: ['*']
    });

  }
]);
