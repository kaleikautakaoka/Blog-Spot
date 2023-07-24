//get route to join post and user tables
const router = require('express').Router();
const { Post, User, View } = require('../models');
const withAuth = require('../utils/auth');

