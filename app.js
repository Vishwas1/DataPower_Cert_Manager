require('dotenv').load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbcon = require('./config/database');
var routes = require('./routes/index');
var app = express();

/*Routes*/
routes(app);

/*Jade view egine*/
// app.set('views', path.join(__dirname, './app/views'));
// app.set('view engine', 'jade');

/*HTML view engine */
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

/*Static folder where we put client side codes*/
app.use(express.static(path.join(__dirname, 'public')));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
  // app.listen('3000', function () {
  //   console.log( ("Listening on port 3000").green );
  // });
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//
// app.use(function (req, res, next) {
//   dbcon(function (err, db) {
//     if (err) return res.send(500, "cannot connect ot database");
//     req.db = db;
//     req.models = db.models;
//     next();
//   });
// });

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

// catch 404 and forward to error handler
module.exports = app;
