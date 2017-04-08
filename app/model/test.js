//
//
//
// var personObj  = {
//   name      : String,
//   surname   : String,
//   age       : Number, // FLOAT
//   male      : Boolean
//   // continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
//   // photo     : Buffer,// BLOB/BINARY
//   // data      : Object // JSON encoded
// };
//
// module.exports = personObj ;

//
// module.exports = function (orm, db) {
//   var Person = db.define('person', {
//     body      : { type: 'text', required: true },
//     createdAt : { type: 'date', required: true, time: true }});
//
//
//   };
var orm = require("orm");
// module.exports = function (orm, db) {
//
// };
// var Test = "hello";
module.exports = {
  Test : orm.connect("mysql://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST+"/"+process.env.DB_NAME, function (err, db) {
    if (err) throw err;
  // console.log('Test is %s',Test);
    var Test = db.define("test", {
      id      : String,
      data   : String
    }, {
      methods: {
        // fullName: function () {
        // 	return this.name + ' ' + this.surname;
        // }
      },
      validations: {
        // age: orm.enforce.ranges.number(18, undefined, "under-age")
      }
    });

    db.load("./models", function (err) {
    // loaded!
    var Test = db.models.Test;
    // var Pet    = db.models.pet;
});

      return Test ;
      // add the table to the database
  })
};


// module.exports = Test;
