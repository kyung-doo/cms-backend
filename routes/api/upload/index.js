const router = require('express').Router();
const controller = require('./upload.controller');


router.post('/', controller.upload);



module.exports = router;