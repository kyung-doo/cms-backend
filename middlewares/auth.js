const config = require('../config/config');
const jwt = require('jsonwebtoken')


const authMiddleware = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.query.token;

    if(!token) {
        return res.json({
            success: false,
            error:{message:'권한이 없습니다.', code: 403},
            body:null
        })
    }

    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, config.jwtSecret, (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    // process the promise
    p.then((decoded)=>{
        req.decoded = decoded
        next()
    })
    .catch((e) => {
        return res.json({
            success: false,
            error:{message:'권한이 없습니다.', code: 403},
            body:null
        })
    })
}

module.exports = authMiddleware