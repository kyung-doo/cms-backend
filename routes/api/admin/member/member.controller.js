const mongoose = require('mongoose');
const MemberModel = require('../../../../model/Memeber');
const MemberNicknameModel = require('../../../../model/MemberNickname');
const MemberUserIdModel = require('../../../../model/MemberUserId');
const MemberGroupModel = require('../../../../model/MemberGroup');
const objectUtils = require('../../../../utils/objectUtils');

mongoose.Promise = global.Promise;



exports.getMember = (req, res) => {
    
    const id = req.query.id;
    const viewNum = parseInt(req.query.viewNum || 10);
    const page = parseInt(req.query.page || 1);
    
    if(!id) {
        MemberModel.find({}, {password: 0})
        .skip( (page-1) * viewNum )
        .limit( viewNum )
        .sort({register_datetime:-1, _id:-1})
        .then((members) => {
            res.json({
                success: true,
                error: null,
                body: members
            });
        })
        .catch((err) => {
            res.json({
                success: false,
                error:{message:err.message},
                body:null
            });
        })
    }
    else
    {
        MemberModel.findOne({_id: id}, {password: 0})
        .then((member) => {
            res.json({
                success: true,
                error: null,
                body: member
            });
        })
        .catch((err) => {
            res.json({
                success: false,
                error:{message:err.message},
                body:null
            });
        })
    }
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
            body:null
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


exports.removeMember = (req, res) => {
    let superAdm = null;
    const ids = req.body.ids;
    MemberModel.find({_id: { $in: ids }})
    .then(( members ) => {
        var p = [];
        members.forEach(( member ) => {
            if(member.level < 2) {
                p.push( member.remove() )
            } else {
                superAdm = member;
            }
        });
        return Promise.all(p);
    })
    .then(() => {
        if(superAdm) {
            return res.json({
                error: {message:'최고 관리자는 삭제할 수 없습니다.'},
                success: false,
                body: null
            });
        }
        
        res.json({
            error: null,
            success: true,
            body: null
        });
    })
    .catch((err)=> {
        res.json({
            error: {message:err.message},
            success: false,
            body: null
        });
    });
}

exports.updateMember = (req, res) => {
    MemberModel.findOne({_id:req.query.id})
    .then((member) => {
        let p = [];
        if(req.body.password === '') {
            req.body.password = member.password
        }
        
        if(req.body.nickname !== member.nickname) {
            const MemberNickname = new MemberNicknameModel();
            MemberNickname.member_id = req.query.id;
            MemberNickname.nickname = req.body.nickname;
            p.push(MemberNickname.save())
        }

        Object.assign(member, req.body);
        p.push(member.save())

        return Promise.all(p)
    })
    .then(() => {
        res.json({
            error: null,
            success: true,
            body: null
        });
    })
    .catch((err)=> {
        res.json({
            error: {message:err.message},
            success: false,
            body: null
        });
    });
}


exports.getMemberGroup = (req, res) => {
    MemberGroupModel.find({})
    .sort({order:1})
    .then((groups) => {
        res.json({
            error: null,
            success: true,
            body: groups
        });
    })
    .catch((err)=> {
        res.json({
            error: {message:err.message},
            success: false,
            body: null
        });
    });
}

exports.addMemberGroup = (req, res) => {
    const newGroups = req.body;
    MemberGroupModel.find({})
    .then((groups) => {
        
        var p = [];
        var updateAr = [];
        
        groups.forEach(( group, i ) => {
            newGroups.some((newGroup) => {
                if(newGroup._id && group._id == newGroup._id) {
                    Object.assign(group, newGroup);
                    p.push(group.save());
                    updateAr.push( i );
                    return true;
                }
            });
        });

        groups.forEach(( group, i ) => {
            if(!objectUtils.inArray(updateAr, i)) {
                p.push(group.remove());
            }
        });

        newGroups.forEach((newGroup) => {
            if(!newGroup._id ) {
                let group = new MemberGroupModel();
                Object.assign(group, newGroup);
                p.push(group.save());
            }
        });
        return Promise.all(p);
    })
    .then(() => {
        res.json({
            error: null,
            success: true,
            body: null
        });
    })
    .catch((err)=> {
        res.json({
            error: {message:err.message},
            success: false,
            body: null
        });
    });
}


