const mongoose = require('mongoose');
const MemberModel = require('../../../../model/Memeber');
const MemberNicknameModel = require('../../../../model/MemberNickname');
const MemberUserIdModel = require('../../../../model/MemberUserId');

mongoose.Promise = global.Promise;



exports.getMember = (req, res) => {

    const viewNum = parseInt(req.query.viewNum || 10);
    const page = parseInt(req.query.page || 1);
    
    MemberModel.find({}, {password: 0})
    .skip( (page-1) * viewNum )
    .limit( viewNum )
    .sort({register_datetime:-1, _id:-1})
    .then((data) => {
        res.json({
            success: true,
            error: null,
            body: data
        });
    })
    .catch((err) => {
        res.json({
            success: false,
            error:{message:err.message},
            body:data
        });
    })
}

exports.getMemberCount = (req, res) => {
    MemberModel.count({})
    .then((data) => {
        res.json({
            success: true,
            error: null,
            body: data
        });
    })
    .catch((err) => {
        res.json({
            success: false,
            error:{message:err.message},
            body:data
        });
    })
}

exports.getMemberNickname = (req, res) => {
    MemberNicknameModel.find({})
    .then((data) => {
        res.json({
            success: true,
            error: null,
            body: data
        });
    })
    .catch((err) => {
        res.json({
            success: false,
            error:{message:err.message},
            body:data
        });
    })
}


exports.getMemberUserId = (req, res) => {
    MemberUserIdModel.find({})
    .then((data) => {
        res.json({
            success: true,
            error: null,
            body: data
        });
    })
    .catch((err) => {
        res.json({
            success: false,
            error:{message:err.message},
            body:data
        });
    })
}


exports.checkOverap = (req, res) => {
    
    MemberUserIdModel.findOne({
        $or:[
            {userid:req.body.userid}, 
            {email:req.body.email}
        ]
    })
    .then(( data ) => {
        if(data) 
        {
            res.json({
                error: {message: '이미 가입된 아이디 또는 이메일입니다.'},
                success: false,
                body: null
            });
        }

        res.json({
            error:null,
            success:true,
            body: null
        });
    })
    .catch((err) => {
        res.json({
            success: false,
            error:{message:err.message},
            body:data
        });
    })
}


exports.addMember = (req, res) => {
    const Member = new MemberModel();
    Object.assign(Member, req.body);
    
    Member.register_ip = req.header ( 'x-forwarded-for') || req.connection.remoteAddress
    

    Member.save()
    .then(() => {
        const MemberUserId = new MemberUserIdModel();
        MemberUserId.member_id = Member._id;
        MemberUserId.userid = Member.userid;
        MemberUserId.email = Member.email;
        return MemberUserId.save();
    })
    .then(() => {
        if(Member.nickname) {
            const MemberNickname = new MemberNicknameModel();
            MemberNickname.member_id = Member._id;
            MemberNickname.nickname = Member.nickname;
            return MemberNickname.save();
        }
    })
    .then(() => {
        return res.json({
            error:null,
            success:true,
            body:null
        });
    })
    .catch((err)=> {
        return res.json({
            error:{message:err.message},
            success:false,
            body:null
        });
    });
    
}


