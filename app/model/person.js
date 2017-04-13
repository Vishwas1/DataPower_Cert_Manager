module.exports = function(db, callback) {
  db.define("person", {
    id      : Number,
    name   : String,
    surname : String
  });

    return callback();
};
// var orm = require("orm");
//
// orm.connect("mysql://username:password@host/database", function (err, db) {
//   if (err) throw err;
//
// 	var Person = db.define("test", {
// 		id      : String,
// 		data   : String
// 	}, {
// 		methods: {
// 			// fullName: function () {
// 			// 	return this.name + ' ' + this.surname;
// 			// }
// 		},
// 		validations: {
// 			// age: orm.enforce.ranges.number(18, undefined, "under-age")
// 		}
// 	});
//
//     // add the table to the database
// });
