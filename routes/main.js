var router = require('express').Router();


router.get('/',function(req,res,next){
    res.render('index');
});
router.get('/about', function (req, res, next) {
    res.render('about');
});
router.get('/contact', function (req, res, next) {
    res.render('contact');
});
router.get('/index', function (req, res, next) {
    res.render('index');
});

module.exports = router;