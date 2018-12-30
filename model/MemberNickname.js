const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;


const MemberNicknameSchema = new Schema({
    // 멤버 아이디
    member_id : {
        type: ObjectId,
        required: true
    },
    //닉네임명
    nickname: {
        type:String,
        required: true
    },
    //시작일
    start_date : {
        type: Date,
        default: new Date()
    },
    //종료일
    end_date : {
        type: Date
    }
});


module.exports = mongoose.model('MemberNickname', MemberNicknameSchema);