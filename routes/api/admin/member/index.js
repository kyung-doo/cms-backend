const router = require('express').Router();
const controller = require('./member.controller');


// 회원목록 api
router.get('/', controller.getMember);

// 회원목록 수 api
router.get('/count', controller.getMemberCount);

// 회원 닉네임 목록 api
router.get('/nickname', controller.getMemberNickname);

// 회원 아이디 목록 api
router.get('/userid', controller.getMemberUserId);

// 중복 회원 찾기 api
router.post('/check-overap', controller.checkOverap);

// 회원저장 api
router.post('/write', controller.addMember);

// 회원삭제 api
router.post('/delete', controller.removeMember);


module.exports = router;