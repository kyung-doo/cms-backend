const mongoose = require('mongoose');
const MemberModel = require('../../../../model/Memeber');
const jwt = require('jsonwebtoken')
const config = require('../../../../config/config');
const objectUtils = require('../../../../utils/objectUtils');
mongoose.Promise = global.Promise;


exports.login = (req, res) => {

    MemberModel.findOne({
        userid:req.body.userid
    })
    .then(( member ) => {
        if( member ) {
            if(member.level == 1) {
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
                                return res.json({
                                    error:err,
                                    success:false,
                                    body: null
                                });
                            }

                            return res.json({
                                error:null,
                                success:true,
                                body: {
                                    token: token,
                                    photo: member.photo
                                }
                            });
                        });
                        
                    } else {
                        return res.json({
                            error:{message: '패스워드를 확인하세요.'},
                            success:false,
                            body: null
                        });
                    }
                });
            }
            else {
                return res.json({
                    error:{message: '관리자 회원이 아닙니다.'},
                    success:false,
                    body: null
                });
            }
        }
        else {
            return res.json({
                error:{message: '회원 아이디를 확인하세요.'},
                success:false,
                body: null
            });
        }        
    })
    .catch((err) => {
        res.json({
            success: false,
            error:{message:err.message},
            body:data
        });
    })
}