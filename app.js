require('dotenv').load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbcon = require('./config/database');
var routes = require('./routes/index');
var users = require('./routes/users');
var orm = require('orm');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


// app.use(orm.express("mysql://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST+"/"+process.env.DB_NAME, {
// 	define: function (db, models, next) {
// 		models.person = db.define("person", { });
// 		next();
// 	}
// }));
var Test = require('./app/model/test');
// require('./app/model/test');
console.log(Test);
Test.Test.find({id : "1" },function(err, test){
  // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
  if (err) throw err;

  // console.log("People found: %d", test1.);
  console.log("Id ::  %s, data ::  %s", test[0].id, test[0].data);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
