var config = require('../../config'),
	Auth = require('../auth/service'),
	User = config.sequelize.import('./model');

/* if error occurs respond with the status code or 500 */
function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return (err) => {
        return res.status(statusCode).send(err);
    };
}

function userController () {}

/* get all the users */
userController.index = (req, res) => {
	User.findAll().then((users) => {
		return res.status(200).json(users);
	})
	.catch(handleError(res));
}

/* creates new user */
userController.create = (req, res) => {
	var body = req.body;
	// User.sync({force:true}).then(function () {
	// 	return User.create({
	// 		usr_first_nm: body.usr_first_nm,
	// 		usr_last_nm: body.usr_last_nm,
	// 		usr_email1: body.usr_email1,
	// 		usr_phone: body.usr_phone, 
	// 		password: body.password
	// 	});
	// });
	// return res.status(200).json({message: 'user created successfully'});
	var newUser = User.build(body);
	Auth.hash(body.password).then((password) => {
		newUser.setDataValue('password', password);
		newUser.save().then(user => {
			return res.status(200).json({message: 'user created successfully'});
		})
		.catch(handleError(res));
    }, (error) => {
        return res.json({ error: true, message: 'An error occured', data: error });
    });
}

/* find single user by id */
userController.show = (req, res, next) => {
	var body = req.params;
	User.findOne({ where: {usr_id: body.id}}).then(user => {
		return res.status(200).json(user);
	})
	.catch(handleError(res));
}

module.exports = userController;