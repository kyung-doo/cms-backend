const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;


const MemberGroupMemberSchema = new Schema({

    // 회원 그룹 명
    group_id : {
        type: ObjectId,
        ref: 'MemberGroup'
    },

    member_id: {
        type: ObjectId,
        ref: 'Member'
    },

    // 생성 일시
    datetime : {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('MemberGroupMember', MemberGroupMemberSchema);