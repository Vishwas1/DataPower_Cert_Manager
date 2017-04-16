// var settings = require('../../config/settings');
var dbconnection  = require('../.././config/database');
var User = require ('.././model/test');
module.exports = function (req, res, next) {
  //res.sendfile(settings.path + '/public/index.html');
  console.log('home controller');

  dbconnection
    .authenticate()
    .then(function(err) {
      console.log('Connection has been established successfully.');
      // User.findById(1).then(function(users) {
      //   console.log(users.get('data'));
      //     // res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut',fromDb : JSON.stringify(test) });
      // });

      Test.findAll({
        attributes: ['data']
      }).then(function(data){
        console.log(data);
        res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut',fromDb : JSON.stringify(data) });
      });
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
  //Database queries
  var test1 =null;
  // console.log(db);
  // db.on('connect', function(err) {
  //   if(err) return console.error('Connection error:  '+ err);
  //   console.log("inside connection....");
  //   db.load('.././model/test.js', function(err) {
  //       if (err) throw err;
  //       var test = db.models.test;
  //       test.find({
  //           id: 1
  //       }, function(err, test) { //VIEW BY ID
  //           if (err) {
  //               console.log(err);
  //               return;
  //           }
  //           console.log("---------Fetching Records from database for model test-----------------------------");
  //           console.log(JSON.stringify(test));
  //
  //           test1 = test;
  //           res.render('index', { title: 'Express',name: 'Vikram',place1 : 'Dosut',fromDb : JSON.stringify(test1) });
  //       });
  //   });
  //
  //   db.close();
//  });


};
