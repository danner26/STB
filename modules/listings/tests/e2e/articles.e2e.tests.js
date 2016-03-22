'use strict';

describe('Articles E2E Tests:', function () {
  describe('Test listings page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/listings');
      expect(element.all(by.repeater('article in listings')).count()).toEqual(0);
    });
  });
});
