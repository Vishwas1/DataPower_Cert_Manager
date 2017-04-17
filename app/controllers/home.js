module.exports = function (req, res, next) {
    console.log('home controller');
    res.render('../views/index.html');
};
