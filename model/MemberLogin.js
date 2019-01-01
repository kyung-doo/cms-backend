const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;


const MemberLoginSchema = new Schema({

    // 로그인한 회원 아이디
    member_id : {
        type: ObjectId,
        ref: 'Member'
    },

    // 로그인 성공 여부
    success : {
        type: Boolean,
        default: false
    },

    // 로그인 일시
    datetime : {
        type: Date,
        default: new Date()
    },

    // 로그인 시도할 때에 입력한 아이디
    userid : {
        type: String
    },

    // 로그인 한 ip
    ip : {
        type: String
    },

    // 로그인 성공/ 실패 시 이유
    reason : {
        type: String
    },

    // 로그인 userAgent
    useragent : {
        type: String
    },

    // 로그인한 페이지 주소
    useragent : {
        type: String
    },

    // 이전 페이지 주소
    referer : {
        type: String
    }
});


module.exports = mongoose.model('MemberLogin', MemberLoginSchema);