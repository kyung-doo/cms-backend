const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Schema = mongoose.Schema;


const MemberGroupSchema = new Schema({

    // 회원 그룹 명
    title : {
        type: String,
        required: true
    },

    // 그룹 생성 일시
    datetime : {
        type: Date,
        default: new Date()
    },
    
    // 그룹 정렬 순서
    order : {
        type: Number,
        required: true
    },

    // 그룹 설명
    description : {
        type: String
    }
});


module.exports = mongoose.model('MemberGroup', MemberGroupSchema);