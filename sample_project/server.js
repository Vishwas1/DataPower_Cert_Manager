var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    root        = process.cwd(), /*root path*/
    config      = require('./config');
    stripe		= require('stripe')("sk_test_XmyWZL8nAT6KZF3pEW5YfpHP");

/* parsing the body to json */
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

/* allow cross domain access */
app.use(config.allowCrossDomain);

/* Setting path to serve static files from */
app.use(express.static(path.join(root + '/client')));

/* setting node modules serving path */
app.use('/node_modules', express.static(path.join(root + '/node_modules')));

/*api routes configuration */
app.use('/user', require('./api/user'));
app.use('/auth', require('./api/auth'));
app.use('/service', require('./api/service'));
app.use('/payment', require('./api/payment'));


/* setting route to serve index.html , clint entry point*/
app.get('/*', (req, res, next) => res.sendFile(root + '/client/index.html'));

/* starting server */
app.listen(config.port);

/* server start message */
console.log("Yoga Picking on: ", config.port);