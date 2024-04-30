const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', notesCtrl.create);
router.get('/:id', notesCtrl.show);
router.get('/', notesCtrl.index);

// POST /api/users/login


module.exports = router;