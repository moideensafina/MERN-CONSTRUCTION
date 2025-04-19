const express = require('express');
const router = express.Router();
const path = require('path');
const { registerUser, loginUser, logOutUser, getUserProfile } = require('../controllers/authController');
const { isAuthenticateUser } = require('../middleware/authenticate');


router.route('/register').post(registerUser);
router.route('/admin/login').post(loginUser);
router.route('/admin/logout').get(logOutUser);
router.route('/myprofile').get(isAuthenticateUser,getUserProfile);


module.exports = router;
