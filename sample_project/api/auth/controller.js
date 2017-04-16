var config = require('../../config'),
	User = config.sequelize.import('../user/model'),
	Auth = require('./service');


function authController () {}

/* validate token and log in */
authController.login = (req, res, next) => {
	var data = req.body;
	//Verify data
	if(!data.usr_email1) return res.json({error: true, message: "Email required."});
	if(!data.password) return res.json({error: true, message: "Password required."});
	User.findOne({where: {usr_email1: data.usr_email1}}).then(user => {
		if(!user) return res.status(400).json({error: true, message: 'user not registered'});
		if(!user.usr_active) return res.status(403).json({error: true, message: 'user not verified'});
		Auth.verify({ input: data.password, hashed: user.password }).then((status) => {
			if (!status)
                return res.json({ error: true, message: "Password is incorrect." });
        	var token = Auth.signToken(user.usr_id);
        	res.cookie('token', JSON.stringify(token));
        	var userData = {
        		name: user.usr_first_nm + ' ' + user.usr_last_nm,
        		email: user.usr_email1,
        		role: user.usr_role
        	}
        	return res.json({ error: false, message: 'Welcome, ' + user.usr_first_nm, data: { user: userData, token: token}});
		});
	});
}

/* checks for logged in status */
authController.status = (req, res) => {
	console.log('reached Here');
	var user = req.user;
	delete user.dataValues.password
	// delete user['password'];
	return res.json({error: false, data: user});
}

/*  */
authController.verify = (req, res, next) => {

}

/*  */
authController.reset = (req, res, next) => {

}

module.exports = authController;