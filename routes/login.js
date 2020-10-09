var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'Fantasy Football', 
        name: 'Login'
    });
});

module.exports = router;
