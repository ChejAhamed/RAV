const controllers = require('./authController')();

jest.mock('jsonwebtoken');

describe('authControllers', () => {
  describe('Given a signup function', () => {
    describe('When is invoqued and req contains user', () => {
      test('Then res.json is called', async () => {
        const res = {
          json: jest.fn()
        };
        const req = {
          user: ''
        };
        await controllers.signup(req, res);
        expect(res.json).toHaveBeenCalled();
      });
    });

    describe('When updateToken is called', () => {
      describe('And there is no token', () => {
        test('Shoud return error status 401', async () => {
          const req = {
            body: { }
          };
          const res = {
            status: jest.fn()
          };
          await controllers.updateToken(req, res);
          expect(res.status).toHaveBeenCalledWith(401);
        });
      });
      describe('And there is incorrect token', () => {
        test('Shoud return error status 403', async () => {
          const req = {
            body: {
              token: '1234'
            }
          };
          const res = {
            status: jest.fn()
          };
          await controllers.updateToken(req, res);
          expect(res.status).toHaveBeenCalledWith(403);
        });
      });
    });
  });
});
