const mongoose = require('mongoose');
const validate = require('../utils/validate');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
mongoose.Promise = global.Promise;


// 멤버 스키마
const MemberSchema = new Schema({

    // 회원 아이디
    userid : { 
        type: String, 
        unique:true, 
        required:'아이디를 입력하세요.',
        validate:[validate.isId, '아이디는 4자리 이상 입력하세요.']
    },

    // 회원 이메일 
    email : {
        type: String, 
        unique: true, 
        lowercase: true,
        required:' 이메일을 입력하세요.',
        validate: [validate.isEmail, '올바른 이메일 형식이 아닙니다.']
    }, 

    // 회원 패스워드
    password : {
        type: String, 
        required: '패스워드를 입력하세요.',
        trim: true,
        validate:[validate.isPassword, '비밀번호는 4자리 이상 입력하세요.']
    }, 

    // 회원 이름
    username : {
        type: String, 
        required: '이름을 입력하세요.'
    }, 

    // 닉네임
    nickname : String,

    // 회원 연락처
    phone : {
        type: String,
        required:true,
        validate:[validate.isPhone, '연락처를 입력하세요.']
    },

    // 회원 생년월일
    birthday : {
        type: Date,
        required:'생년월일을 입력하세요.'
    },

    // 회원 우편번호
    zipcode : {
        type: String,
        required:'우편번호를 입력하세요.'
    },

    // 회원 주소
    address : {
        type: [String],
        required:'주소를 입력하세요.',
        validate:[validate.isAddress, '나머지 주소를 입력하세요.']
    },

    // 회원 레벨
    level : {
        type: Number, 
        default: 0
    },

    // 회원 포인트
    point : {
        type : Number,
        default : 0
    },

    // 회원 홈페이지
    homepage : String,

    // photo 홈페이지
    photo : String,


    // 이메일 수신 여부
    receive_email : {
        type: Boolean,
        default: true
    },

    // 쪽지 사용 여부
    use_note : {
        type: Boolean,
        default: true
    },

    // SMS 문자받기
    receive_sms : {
        type: Boolean,
        default: true
    },

    // 프로필 공개 여부
    open_profile : {
        type: Boolean,
        default: true
    },

    // 차단된 회원인지 여부
    denied : {
        type: Boolean,
        default: false
    },

    // 자기소개
    profile_content : {
        type: String
    },

    // 관리자용 메모
    admin_memo : {
        type: String
    },

    //회원 등록일
    register_datetime : {
        type: Date,
        default: new Date()
    },

    //회원 등록 ip
    register_ip : {
        type: String,
        require: true
    },

    //최종 로그인 시간
    last_login_date: {
        type: Date
    },

    //최종 로그인 아이피
    last_login_ip: {
        type: String
    }

});


//비밀번호 해쉬
MemberSchema.pre('save', function(next){
    var owner = this;
    if (!owner.isModified('password')) return next();  
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);
        bcrypt.hash(owner.password, salt, null, function(err, hash) {
            if(err) return next(err);
            owner.password = hash;
            next();
        });
    });
});

// 비밀번호 확인
MemberSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, res) {
        callback(res);
    });
}

module.exports = mongoose.model('Member', MemberSchema);