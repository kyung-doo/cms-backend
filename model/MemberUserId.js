const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;


const MemberUserIdSchema = new Schema({
    // 멤버 아이디
    member_id : {
        type: ObjectId,
        ref: 'Member'
    },
    // 회원 아이디
    userid : { 
        type: String, 
        unique:true, 
        required:true
    },
    // 회원 이메일 
    email : {
        type: String, 
        unique: true, 
        lowercase: true,
        required:true
    }, 
    //회원 상태 
    //0 : 회원, 1 : 차단회원, 2 : 휴면회원, 3 : 탈퇴회원
    status: {
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model('MemberUserId', MemberUserIdSchema);