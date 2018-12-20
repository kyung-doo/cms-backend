const router = require('express').Router();
const controller = require('./auth.controller');


// 로그인
router.post('/login', controller.login);



module.exports = router;