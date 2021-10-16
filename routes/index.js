// required setup
var express = require('express');
var router = express.Router();

// function
var { getHome, postHome } = require('../controllers/index.js');
//var { authenticationToken } = require('../middlewares/auth.js'); middleware function

// home page
router.get('/', getHome); // map endpoint with function
router.post('/', postHome); // map endpoint with function

// router.get('/', authenticationToken, getHome);
/* authenticationToken is a middleware function. When you write like this,
authenticationToken function will be executed first before the getHome function.
This is useful when you want to check if the user is logged in for security
reasons */

module.exports = router;