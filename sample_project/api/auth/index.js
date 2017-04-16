var controller = require("./controller"),
    express = require('express'),
    Auth = require('./service'),
    router = express.Router();

router.post('/login', controller.login);
router.post('/status', Auth.isAuthenticated(), controller.status);
router.post('/reset', controller.reset);
router.post('/verify', controller.verify);

module.exports = router;