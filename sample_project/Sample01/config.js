var env = require('./environment');
var Sequelize = require('sequelize');

function config () {}

/* App serve port number */
config.port = env.config.environment === 'development' ? 4000 : 80;

/* database configuration */
if(env.config.environment === 'development') {
    config.sequelize = new Sequelize('play', 'postgres', 'root', {
        host: 'localhost',
        dialect: 'postgres'
    });    
}
else {
    config.sequelize = new Sequelize('pickyoga', 'postgres', 'postgres', {
        host: 'localhost',
        dialect: 'postgres'
    });
}

/* Secret key to generate jwt token */
config.secret = 'sectret key';

/* */
config.rounds = 10;

/* user role heirarchy */
config.userRoles = ['guest', 'user', 'admin'];

/* cross domain access configuration */
config.allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, client-security-token, Origin, Content-Length, X-Requested-With');
    // console.log('req.method: ', req.method);
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};

module.exports = config;