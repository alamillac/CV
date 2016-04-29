var express = require('express');
var path = require('path');
var userDataES = require(path.join('..', 'data', 'user_es.json'));
var userDataEN = require(path.join('..', 'data', 'user_en.json'));
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    data = userDataES;
    data.nextLanguage = "en";
    res.render('index', data);
});

router.get('/es', function(req, res, next) {
    data = userDataES;
    data.nextLanguage = "en";
    res.render('index', data);
});

router.get('/en', function(req, res, next) {
    data = userDataEN;
    data.nextLanguage = "es";
    res.render('index', data);
});

module.exports = router;
