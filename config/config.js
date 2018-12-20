const path = require('path');


module.exports = {

    //업로드 경로
    uploadUrl: path.join(__dirname, '../uploads'),

    //토큰 secret key
    jwtSecret: 'super-secret-key'
}