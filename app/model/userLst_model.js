module.exports = function(db, callback) {
  db.define("users", {
    id      : Number,
    name   : String,
    email   : String
  });

    return callback();
};
