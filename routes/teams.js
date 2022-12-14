const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const isLoggedIn = require('../config/auth');
//post,put,delete
router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/new', teamsCtrl.create)
router.put('/:id', teamsCtrl.update)
router.delete('/:id', teamsCtrl.deleteTeam)

module.exports = router;