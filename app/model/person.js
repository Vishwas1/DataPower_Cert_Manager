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

orm.connect("mysql://username:password@host/database", function (err, db) {
  if (err) throw err;

	var Person = db.define("test", {
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

    // add the table to the database
});
