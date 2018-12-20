const router = require('express').Router();
const member = require('./admin/member');
const auth = require('./admin/auth');
const upload = require('./upload');
const authMiddleware = require('../../middlewares/auth');


//어드민 인증 라우터
router.use('/admin/auth', auth)

//업로드 라우터
router.use('/uploads', upload)

//멤버 라우터
router.use('/admin/member', /*authMiddleware,*/ member)


module.exports = router