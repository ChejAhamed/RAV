/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const jwt = require('jsonwebtoken');

let refreshTokens = [];

function authController() {
  async function signup(req, res) {
    res.json({
      message: 'Signup successfull',
      user: req.user
    });
  }

  async function login(req, res, next) {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const data = { _id: user._id, email: user.email };
              const token = jwt.sign(
                { user: data },
                process.env.SECRET_KEY,
                { expiresIn: process.env.TOKEN_REFRESH_TIME }
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.SECRET_KEY
              );

              refreshTokens.push(
                refreshToken
              );

              return res.json({ user, token, refreshToken });
            }
          );
        } catch (error) {
          return res.status;
        }
      }
    )(req, res, next);
  }

  async function updateToken(req, res) {
    const { token } = req.body;

    if (!token) {
      return res.status(401);
    }

    if (!refreshTokens.includes(token)) {
      return res.status(403);
    }

    return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403);
      }

      const data = { _id: user._id, email: user.email };
      const accessToken = jwt.sign(
        { user: data },
        process.env.SECRET_KEY,
        { expiresIn: process.env.TOKEN_REFRESH_TIME }
      );
      return res.json({
        accessToken
      });
    });
  }

  async function refreshMyToken({ body: { refreshToken } }, res) {
    if (!refreshToken) {
      return res.sendStatus(401);
    }

    if (!refreshTokens.includes(refreshToken)) {
      return res.sendStatus(403);
    }

    return jwt.verify(refreshToken, process.env.SECRET_KEY, (err, { user }) => {
      if (err) {
        return res.sendStatus(403);
      }

      const data = { _id: user._id, email: user.email };

      const token = jwt.sign(
        { user: data },
        process.env.SECRET_KEY,
        { expiresIn: '1m' }
      );

      return res.json({
        token
      });
    });
  }

  async function logout(req, res) {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter((current) => current !== token);

    res.send('Logout successful');
  }

  return {
    signup,
    login,
    updateToken,
    refreshMyToken,
    logout
  };
}
module.exports = authController;
