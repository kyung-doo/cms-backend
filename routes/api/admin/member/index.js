const router = require('express').Router();
const controller = require('./member.controller');


// 회원목록 api
router.get('/', controller.getMember);

// 회원목록 수 api
router.get('/count', controller.getMemberCount);

// 회원 아이디 목록 api
router.get('/userid', controller.getMemberUserId);

// 중복 회원 찾기 api
router.post('/check-overap', controller.checkOverap);

// 회원 저장 api
router.post('/write', controller.addMember);

// 회원 삭제 api
router.post('/delete', controller.removeMember);

// 회원 업데이트 api
router.post('/update', controller.updateMember);




// 회원 그룹 목록 api
router.get('/group', controller.getMemberGroup);

// 회원 그룹 저장 api
router.post('/group/write', controller.addMemberGroup);




// 로그인 로그 api
router.get('/login-log', controller.getLoginLog);

// 로그인 로그 수 api
router.get('/login-log/count', controller.getLoginLogCount);




module.exports = router;