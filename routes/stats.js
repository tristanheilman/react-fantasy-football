var express = require('express');
var router = express.Router();
var async = require('express-async-await')
var fetch = require('node-fetch');

router.get('/', async function(req, res, next) {

    res.render('stats', { title : 'Fantasy Football', players : [] });

});

module.exports = router;
