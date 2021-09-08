/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const { Router } = require('express');
const authControllers = require('../controllers/authControllers')();

const authRoutes = Router();

authRoutes.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  authControllers.signup
);

authRoutes
  .route('/login')
  .post(authControllers.login);

authRoutes
  .route('/token')
  .post(authControllers.updateToken);

authRoutes
  .route('/logout')
  .post(authControllers.logout);

authRoutes
  .route('/refreshToken')
  .post(authControllers.refreshMyToken);

module.exports = authRoutes;
