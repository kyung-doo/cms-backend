const globals = require('../globals');

const globalsMiddleware = (req, res, next) => {

    globals.IPAdress = req.header ( 'x-forwarded-for') || req.connection.remoteAddress;
    
    next()
}

module.exports = globalsMiddleware;