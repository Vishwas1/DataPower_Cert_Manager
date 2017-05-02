var config = require('../../config'),
	Auth = require('../auth/service'),
	Service = config.sequelize.import('./model');

/* if error occurs respond with the status code or 500 */
function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return (err) => {
        return res.status(statusCode).send(err);
    };
}

function serviceController () {}

/* get all the users */
serviceController.index = (req, res) => {
	Service.findAll().then((service) => {
		return res.status(200).json({error: false, data: service});
	})
	.catch(handleError(res));
}

/* creates new user */
serviceController.create = (req, res) => {
	var body = req.body;
	// Service.sync({force:true}).then(function () {
	// 	return Service.create({
	// 		// usr_first_nm: body.usr_first_nm,
	// 		// usr_last_nm: body.usr_last_nm,
	// 		// usr_email1: body.usr_email1,
	// 		// usr_phone: body.usr_phone, 
	// 		// password: body.password
	// 	});
	// });
	// return res.status(200).json({message: 'Service created successfully'});
	var newService = Service.build(body);
	newService.save().then(user => {
		return res.status(200).json({error: false, message: 'Service created successfully'});
	})
	.catch(handleError(res));
}

// /* find single user by id */
// serviceController.show = (req, res, next) => {
// 	var body = req.params;
// 	User.findOne({ where: {usr_id: body.id}}).then(user => {
// 		return res.status(200).json(user);
// 	})
// 	.catch(handleError(res));
// }

module.exports = serviceController;