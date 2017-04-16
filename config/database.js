var orm = require("orm");
var gblDBObject ={};
orm.connect("mysql://"+process.env.DB_USER+":"+process.env.DB_PASS+"@"+process.env.DB_HOST+"/"+process.env.DB_NAME,gblDBObject= function(err, db) {
    if (err) throw err;
    return db;

});
module.exports =gblDBObject;
