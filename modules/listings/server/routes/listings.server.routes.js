'use strict';

/**
 * Module dependencies.
 */
var articlesPolicy = require('../policies/listings.server.policy'),
  articles = require('../controllers/listings.server.controller');

module.exports = function(app) {
  // Articles collection routes
  app.route('/api/listings').all(articlesPolicy.isAllowed)
    .get(articles.list)
    .post(articles.create);

  // Single article routes
  app.route('/api/listings/:listingId').all(articlesPolicy.isAllowed)
    .get(articles.read)
    .put(articles.update)
    .delete(articles.delete);

  // Finish by binding the article middleware
  app.param('articleId', articles.articleByID);
};
