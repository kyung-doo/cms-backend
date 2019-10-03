const mongoose = require('mongoose');

const MemberModel = require('../../../../model/Memeber');
const MemberUserIdModel = require('../../../../model/MemberUserId');
const MemberGroupModel = require('../../../../model/MemberGroup');
const MemberGroupMemberModel = require('../../../../model/MemberGroupMember');
const MemberLoginModel = require('../../../../model/MemberLogin');

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
        .populate('groups', 'title')
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
            {userid: req.body.userid}, 
            {email: req.body.email}
        ]
    })
    .then(( member ) => {
        if(member) 
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
    .then(( member ) => {
        var p = [];
        const MemberUserId = new MemberUserIdModel();
        MemberUserId.member_id = Member._id;
        MemberUserId.userid = Member.userid;
        MemberUserId.email = Member.email;
        p.push(MemberUserId.save())
        member.groups.forEach((group) => {
            const MemberGroupMember = new MemberGroupMemberModel();
            MemberGroupMember.member_id = member._id;
            MemberGroupMember.group_id = group;
            p.push(MemberGroupMember.save());
        });

        return Promise.all(p);
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
    
    MemberModel.find({_id: { $in: req.body.ids }})
    .then((members) => {
        var p = [];
        let memIds = [];
        members.forEach(( member, i ) => {
            if(member.level < 2) {
                memIds.push(member._id);
                p.push( member.remove())
            } else {
                superAdm = member;
            }
        });
        p.push( MemberUserIdModel.deleteMany({member_id: { $in: memIds }}) )
        p.push( MemberGroupMemberModel.deleteMany({member_id: { $in: memIds }}) )
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
    
    Promise.all([
        MemberModel.findOne({_id:req.query.id}), 
        MemberUserIdModel.findOne({member_id:req.query.id}),
        MemberGroupMemberModel.deleteMany({member_id:req.query.id})
    ])
    .then(([member, memberUserId]) => {
        
        let p = [];
        if(req.body.password === '') {
            req.body.password = member.password
        }

        Object.assign(member, req.body);
        p.push(member.save());

        memberUserId.userid = member.userid;
        memberUserId.email = member.email;
        memberUserId.status = member.denied ? 1 : 0;
        p.push(memberUserId.save());

        member.groups.forEach((group) => {
            const MemberGroupMember = new MemberGroupMemberModel();
            MemberGroupMember.member_id = member._id;
            MemberGroupMember.group_id = group;
            p.push(MemberGroupMember.save());
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


exports.getMemberGroup = (req, res) => {

    var Groups =[];
    MemberGroupModel.find({})
    .sort({order:1})
    .then((groups) => {
        Groups = groups;
        var p = [];
        groups.forEach((group) => {
            p.push(MemberGroupMemberModel.count({group_id:group._id}));
        });
        return Promise.all(p);
    })
    .then(( counts ) => {
        var newGroups = [];
        Groups.forEach((group, i) => {
            newGroup = {};
            newGroup._id = group._id;
            newGroup.title = group.title;
            newGroup.datetime = group.datetime;
            newGroup.order = group.order;
            newGroup.description = group.description;
            newGroup.count = counts[i];
            newGroups.push(newGroup);
        });
        
        res.json({
            error: null,
            success: true,
            body: newGroups
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
    let removeGroups = [];
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
                removeGroups.push(group._id);
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
        return Promise.all([
            MemberModel.find({ groups:{ $in: removeGroups }}), 
            MemberGroupMemberModel.deleteMany({ group_id:{ $in: removeGroups }})
        ]);
    })
    .then(( [members] ) => {
        var p = [];
        members.forEach((member) => {
            var ar = [];
            member.groups.forEach(( id ) => {
                if(!objectUtils.inArrayEquals( removeGroups, id)) {
                    ar.push(id)
                }
            });
            member.groups = ar;
            p.push(member.save())
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


exports.getLoginLog = (req, res) => {
    
    const viewNum = parseInt(req.query.viewNum || 10);
    const page = parseInt(req.query.page || 1);
    
    MemberLoginModel.find({})
    .skip( (page-1) * viewNum )
    .limit( viewNum )
    .sort({datetime:-1, _id:-1})
    .then((loginLogs) => {
        res.json({
            success: true,
            error: null,
            body: loginLogs
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

exports.getLoginLogCount = (req, res) => {
    MemberLoginModel.count({})
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