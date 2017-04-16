var compose = require('composable-middleware'),
    jwt = require('jsonwebtoken'),
    promise = require('bluebird'),
    bcrypt = require('bcryptjs'),
    expressJWT = require('express-jwt'),
    config = require('../../config'),
    User = config.sequelize.import('../user/model'),
    validateJwt = expressJWT({ secret: config.secret }).unless({
        path: [
            '/auth/login',
            '/auth/reset',
            '/auth/verify'
        ]
    });

function authService() {}

/* returns hashed password */
authService.hash = (password) => {
    return new promise(function(resolve, reject) {
        var rounds = config.rounds || 10;
        bcrypt.hash(password, rounds, function(err, hash) {
            if (err)
                return reject(err);
            resolve(hash);
        });
    });
}

/* verify the passwords */
authService.verify = (passwords) => {
    return new promise(function(resolve, reject) {
        bcrypt.compare(passwords.input, passwords.hashed, function(err, status) {
            if (err)
                return reject(err);
            // let status = true;
            //If status is false, return
            if (!status)
                resolve(status);
            //Else create a JWT token and sent it back
            resolve(status);
        });
    });
};

/* check user role and serve accordingly get */
authService.hasRole = (roleRequired) => {
    if (!roleRequired)
        throw new Error('Required role needs to be set');
    return compose()
        .use(authService.isAuthenticated())
        .use((req, res, next) => {
            if (config.userRoles.indexOf(req.user.usr_role) >= config.userRoles.indexOf(roleRequired))
                return next();
            else
                return res.status(403).send('Forbidden');
        });
};

/*  sighn the token with secret key and user id */
authService.signToken = (id) => {
    return jwt.sign({ _id: id }, config.secret, { expiresIn: 60 * 60 * 50 })
};


/* check wheather user is authenticated or not */
authService.isAuthenticated = () => {
    // Validate jwt
    return compose().use((req, res, next) => {
        // allow access_token to be passed through query parameter as well
        if (req.query && req.query.hasOwnProperty('access_token'))
            req.headers.authorization = 'Bearer ' + req.query.access_token;
        // IE11 forgets to set Authorization header sometimes. Pull from cookie instead.
        if (req.query && typeof req.headers.authorization === 'undefined')
            req.headers.authorization = `Bearer ${req.cookies.token}`;
        validateJwt(req, res, next);
    }).use((req, res, next) => {
        User.findOne({
                where: {
                    usr_id: req.user._id
                }
            })
            .then(user => {
                if (!user) {
                    return res.status(401).end();
                }
                req.user = user;
                next();
            })
            .catch(err => next(err));
    });
};

module.exports = authService;
