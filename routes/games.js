const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');
const isLoggedIn = require('../config/auth');

router.get('/new', gamesCtrl.new);
router.post('/new', gamesCtrl.create)