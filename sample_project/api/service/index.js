var express = require('express'),
    router = express.Router(),
    controller = require('./controller');
    auth =  require('../auth/service');

router.get('/', auth.hasRole('user'), controller.index);
router.post('/', controller.create);
// router.get('/:id', auth.isAuthenticated(), controller.show);
// router.delete('/:id', auth.hasRole('admin'), controller.destroy);
// router.get('/me', auth.isAuthenticated(), controller.me);
// router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);

module.exports = router;