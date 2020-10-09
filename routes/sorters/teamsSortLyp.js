var express = require('express');
var router = express.Router();
var async = require('express-async-await')
var fetch = require('node-fetch');

router.get('/', async function(req, res, next) {
    var url = 'http://localhost:3000/api/teams/sort-lyp';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/teams/sort-lyp';
    }

    const queryResult = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return {status: 200, data: result.data};
    })
    .catch(error => {
        console.log("ERROR: ", error);
        return {status: 500, data: []};
    });

    if(queryResult.status == 200) {
        res.render('teams', { title : 'Fantasy Football', teams : queryResult.data });
    } else {
        res.render('error', { message : queryResult.data });
    }

});

module.exports = router;
