var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const { Connection, Request } = require("tedious");

const config = {
    authentication: {
        options: {
        userName: "azureuser",
        password: "Password1234"
        },
        type: "default"
    },
    server: "nflsqlserver.database.windows.net",
    options: {
        database: "nflmidterm",
        encrypt: true
    }
};

router.get('/', async function(req, res, next) {
    var squadUrl = 'http://localhost:3000/api/user-squad';
    if(process.env.NODE_ENV != 'development') {
        squadUrl = 'https://cc-fantasy-football.azurewebsites.net/api/user-squad';
    }

    if(req.session.user) {

        const squadQueryResult = await fetch(squadUrl)
        .then(response => response.json())
        .then(result => {
            return {status: 200, data: result.data};
        })
        .catch(error => {
            console.log("ERROR: ", error);
            return {status: 500, data: []};
        });



        if(squadQueryResult.status == 200) {
            res.render('squadSelection', { title : 'Fantasy Football', user: req.session.user, userSquad: squadQueryResult.data});
        } else {
            res.render('error', { message : queryResult.data });
        }
    } else {
        res.render('login', { title : 'Fantasy Football' });
    }

});



module.exports = router;
