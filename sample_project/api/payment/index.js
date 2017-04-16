var express = require('express'),
    router = express.Router(),
    controller = require('./controller');
    auth =  require('../auth/service');

router.post('/charge', function (req, res) {
	res.json("user charged");	
});

router.get('/success', function (req, res) {
	res.json('payment success');
});
// router.get('/', auth.hasRole('admin'), controller.index);
// router.get('/:id', auth.isAuthenticated(), controller.show);
// router.post('/', controller.create);
// router.delete('/:id', auth.hasRole('admin'), controller.destroy);
// router.get('/me', auth.isAuthenticated(), controller.me);
// router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);

module.exports = router;