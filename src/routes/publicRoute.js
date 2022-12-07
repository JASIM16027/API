const express = require('express');
const router = express.Router();
const apiRoutes = require('../Services/Handlers/publicHandler');

router.post('/signUp', apiRoutes.signUp);
router.post('/signIn', apiRoutes.signIn);
module.exports = router;
