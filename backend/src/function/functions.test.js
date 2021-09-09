const isValidPassword = require('./functions');

describe('Given a isValidPasword function', () => {
  describe('When is invoqued', () => {
    test('Then should return a boolean', () => {
      const response = isValidPassword();
      expect(typeof response).toBe('boolean');
    });
  });
});
