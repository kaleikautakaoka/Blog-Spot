const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
require('dotenv').config();
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const port = process.env.PORT || 3001;
