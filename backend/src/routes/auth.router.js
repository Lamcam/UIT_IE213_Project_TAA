const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller')
// const middlewares = require("../middlewares")

// router.use('/', middlewares.authorize)
router.post('/api/auth/login', auth.loginUser)
router.post('/api/auth/register', auth.registerUser)
router.get('/user', auth.getUser)


module.exports = router;