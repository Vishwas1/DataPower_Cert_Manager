var orm     = require('orm');

module.exports = {

  list: function ( req, res, next) {
  	console.log(req.models);
    req.model.test.find().limit(4).order('-id').all(function (err, messages) {
      if (err) return next(err);

      var items = messages.map(function (m) {
        return m.serialize();
      });

      res.send({ items: items });
    });
  },
  get: function (req, res, next) {

  }
};
