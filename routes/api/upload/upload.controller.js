const path = require('path')
const fs = require('fs');
const multer = require('multer');
const mongoose = require('mongoose');
const config = require('../../../config/config')
mongoose.Promise = global.Promise;




exports.checkUploadPath = ( req, res ) => {
    return new Promise(function(resolve, reject)
    {
        fs.exists(config.uploadUrl, function(exists) {
            if(exists) {
                comp();
            }
            else {
                fs.mkdir(config.uploadUrl, function(err) {
                    if(err) {
                        reject(new Error('폴더 생성 에러'))
                    } else {
                        comp();
                    }  
                })
            }
        })

        const comp = () => {
            const uploadPath = config.uploadUrl +'/'+ req.query.path;
            fs.exists(uploadPath, function(exists) {
                if(exists) {
                    resolve(req, res);
                    comp();
                }
                else {
                    fs.mkdir(uploadPath, function(err) {
                        if(err) {
                            reject(new Error('폴더 생성 에러'))
                        } else {
                            resolve(req, res);
                            comp();
                        }  
                    })
                }
            })
        }
    });
}

exports.startUpload = ( req, res ) => {
    const limits = {};
    if(req.query.fileSize) limits.fileSize = req.query.fileSize * 1024 * 1024;

    return new Promise(function (resolve, reject)
    {
        const storage = multer.diskStorage({
            // 서버에 저장할 폴더
            destination: function (req, file, cb) {
                cb(null, config.uploadUrl +'/'+ req.query.path);
            },
            // 서버에 저장할 파일 명
            filename: function (req, file, cb) {
                cb(null, new Date().valueOf() + path.extname(file.originalname));
            }
        });
        const upload = multer({ storage: storage, limits:limits }).single('file');
        
        upload(req, res, function (err) {
            if (err) reject(err);
            resolve(req.file);
        });
    })
}


exports.upload = (req, res) => {
    if(!req.query.path) {
        return res.json({
            error:{message: '파일저장 실패'},
            success:false,
            body:null
        });
    }
    
    exports.checkUploadPath( req, res )
    .then(exports.startUpload)
    .then((file) => {
        return res.json({
            success: true,
            error:null,
            body: file
        });
    })
    .catch((err) => {
        return res.json({
            error:{message:err.message},
            success:false,
            body:null
        });
    })
}