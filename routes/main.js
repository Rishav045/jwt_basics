const express = require('express');
const router = express.Router();

const {login,dashboard} = require('../controllers/main.js')
const authMiddleware = require('../middleware/auth');

router.route('/login').post(login);
router.route('/dashboard').get(authMiddleware,dashboard)


module.exports= router;