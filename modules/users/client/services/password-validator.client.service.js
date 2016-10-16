'use strict';

// PasswordValidator service used for testing the password strength
angular.module('users').factory('PasswordValidator', ['$window',
  function($window) {
    var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest;

    return {
      getResult: function(password) {
        var result = owaspPasswordStrengthTest.test(password);
        return result;
      },
      getPopoverMsg: function() {
        var popoverMsg = 'You should create a strong password you can remember. A mixture of upper and lowercase letters and numbers can help deter unauthorized users from entering your account.';
        return popoverMsg;
      }
    };
  }
]);
