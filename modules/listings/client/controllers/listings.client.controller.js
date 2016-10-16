'use strict';

// Articles controller
angular.module('listings').controller('ListingsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Listings',
  function($scope, $stateParams, $location, Authentication, Listings) {
    $scope.authentication = Authentication;

    // Create new Article
    $scope.create = function(isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'submissionForm');
        return false;
      }

      // Create new Article object
      var listing = new Listings($scope.newListingData);

      // Redirect after save
      listing.$save(function(response) {
        $location.path('listings/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function(article) {
      if (article) {
        article.$remove();

        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        $scope.article.$remove(function() {
          $location.path('listings');
        });
      }
    };

    // Update existing Article
    $scope.update = function(isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'submissionForm');

        return false;
      }

      var article = $scope.article;

      article.$update(function() {
        $location.path('listings/' + article._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function() {
      $scope.listings = Listings.query();
    };

    // Find existing Article
    $scope.findOne = function() {
      $scope.article = Listings.get({
        listingId: $stateParams.listingId
      });
    };
  }
]);
