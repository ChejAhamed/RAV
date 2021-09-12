require('dotenv').config();
const express = require('express');
const debug = require('debug')('quizApi');
const morgan = require('morgan');
const chalk = require('chalk');
// const passport = require('passport');
const cors = require('cors');

require('./src/config/mongooseConfig');
require('./src/auth/auth');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const authRoutes = require('./src/routes/authRouter');

server.use('/api/auth/', authRoutes);

const quizRouter = require('./src/routes/quizRoutes');

server.use('/api/quiz', quizRouter);

const userRouter = require('./src/routes/userRoutes');

server.use('/api/user', userRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
