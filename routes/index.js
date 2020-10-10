var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    if(req.session.page_views){
        req.session.page_views++;
     } else {
        req.session.page_views = 1;
     }
     
    res.render('index', {
        title: 'Fantasy Football', 
        page_views: req.session.page_views,
        user: req.session.user
    });
});

module.exports = router;
