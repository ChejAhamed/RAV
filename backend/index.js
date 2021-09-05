require('dotenv').config();
const express = require('express');
const debug = require('debug')('quizApi');
const morgan = require('morgan');
const chalk = require('chalk');

const cors = require('cors');
