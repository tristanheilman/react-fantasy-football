var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('squadRankings', {
        title: 'Fantasy Football', 
        user: req.session.user
    });
});

module.exports = router;
