'use strict';

angular.module('users')
  .directive('passwordValidator', ['PasswordValidator', function(PasswordValidator) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$validators.requirements = function(password) {
          var status = true;
          if (password) {
            var result = PasswordValidator.getResult(password);
            var requirementsIdx = 0;

            // Requirements Meter - visual indicator for users
            var requirementsMeter = [{
              color: 'danger',
              progress: '20'
            }, {
              color: 'warning',
              progress: '40'
            }, {
              color: 'info',
              progress: '60'
            }, {
              color: 'primary',
              progress: '80'
            }, {
              color: 'success',
              progress: '100'
            }];

            if (result.errors && result.errors.length < requirementsMeter.length) {
              requirementsIdx = requirementsMeter.length - result.errors.length - 1;
            }

            scope.requirementsColor = requirementsMeter[requirementsIdx].color;
            scope.requirementsProgress = requirementsMeter[requirementsIdx].progress;

            if (result.errors && result.errors.length > 0) {
              scope.popoverMsg = PasswordValidator.getPopoverMsg();
              scope.passwordErrors = result.errors;
              status = false;
            } else {
              scope.popoverMsg = '';
              scope.passwordErrors = [];
              status = true;
            }
          }

          if (password !== undefined) {
            if (password.length === 0) {
              scope.requirementsProgress = '0';
            }
          } else {
            scope.requirementsProgress = '0';
          }

          document.getElementById('progressDivInside').style.width = '' + scope.requirementsProgress + '%';
          switch (scope.requirementsProgress) { //outline border of #password
            case '20':
              document.getElementById('progressDivInside').style.backgroundColor = 'red';
              break;
            case '40':
              document.getElementById('progressDivInside').style.backgroundColor = 'orange';
              break;
            case '60':
              document.getElementById('progressDivInside').style.backgroundColor = 'yellow';
              break;
            case '80':
              document.getElementById('progressDivInside').style.backgroundColor = 'blue';
              break;
            case '100':
              document.getElementById('progressDivInside').style.backgroundColor = 'green';
              break;
            default:
              document.getElementById('progressDivInside').style.backgroundColor = 'white';
              break;
          }
          return status;
        };
      }
    };
  }]);
