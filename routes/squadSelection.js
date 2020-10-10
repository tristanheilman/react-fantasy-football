var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', async function(req, res, next) {
    var url = 'http://localhost:3000/api/players/qb';
    if(process.env.NODE_ENV != 'development') {
        url = 'https://cc-fantasy-football.azurewebsites.net/api/players/qb';
    }

    if(req.session.user) {
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
            res.render('squadSelection', { title : 'Fantasy Football', user: req.session.user, players : queryResult.data });
        } else {
            res.render('error', { message : queryResult.data });
        }
    } else {
        res.render('squadSelection', { title : 'Fantasy Football', user: null, players: [] });
    }

});

module.exports = router;
