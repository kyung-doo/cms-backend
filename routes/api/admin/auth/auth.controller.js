const mongoose = require('mongoose');
const MemberModel = require('../../../../model/Memeber');
const MemberLoginModel = require('../../../../model/MemberLogin');
const jwt = require('jsonwebtoken')
const config = require('../../../../config/config');
mongoose.Promise = global.Promise;


exports.login = (req, res) => {

    MemberModel.findOne({
        userid:req.body.userid
    })
    .then(( member ) => {
        if( member ) {
            if(member.level > 0) {
                if(!member.denied) {
                    var p = new Promise(function(resolve, reject) {
                        member.comparePassword(req.body.password, (success) => {
                            if(success) {
                                jwt.sign(
                                {
                                    _id: member._id,
                                    username: member.userid,
                                    level: member.level
                                }, 
                                config.jwtSecret,
                                {
                                    expiresIn: '12h'
                                }, 
                                (err, token) => {
                                    if (err) {
                                        reject( err )
                                    }
                                    resolve ( {token : token, member: member})
                                    
                                });
                                
                            } else {
                                reject( new Error('패스워드를 확인하세요.') )
                            }
                        });
                    })
                    return p;
                } else {
                    throw new Error('접근 권한이 없습니다.');
                }
            } 
            else {
               throw new Error('접근 권한이 없습니다.');
            }
        } else {
            throw new Error('아이디를 확인하세요.');
        }
    })
    .then(( data ) => {

        const MemberLogin = new MemberLoginModel();
        MemberLogin.member_id = data.member._id;
        MemberLogin.success = true;
        MemberLogin.userid = req.body.userid;
        MemberLogin.ip = req.header ( 'x-forwarded-for') || req.connection.remoteAddress;
        MemberLogin.reason = '로그인 성공';
        MemberLogin.useragent = req.headers['user-agent'];
        MemberLogin.save();
        
        data.member.last_login_ip = req.header ( 'x-forwarded-for') || req.connection.remoteAddress;
        data.member.last_login_date = Date.now();
        data.member.save();

        res.json({
            error: null,
            success: true,
            body: {
                token: data.token,
                photo: data.member.photo
            }
        }); 
    })
    .catch((err) => {
        const MemberLogin = new MemberLoginModel();
        MemberLogin.success = false;
        MemberLogin.userid = req.body.userid;
        MemberLogin.ip = req.header ( 'x-forwarded-for') || req.connection.remoteAddress;
        MemberLogin.reason = err.message;
        MemberLogin.useragent = req.headers['user-agent'];
        MemberLogin.save();

        res.json({
            success: false,
            error: {message:err.message},
            body: null
        });
    })
}