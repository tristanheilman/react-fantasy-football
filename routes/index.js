var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.page_views){
        req.session.page_views++;
     } else {
        req.session.page_views = 1;
     }
     
    res.render('index', {
        title: 'Fantasy Football', 
        name: 'Express' ,
        page_views: req.session.page_views
    });
});

module.exports = router;
