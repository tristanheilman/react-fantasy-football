var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const { Connection, Request } = require("tedious");


router.post('/', async function(req, res, next) {

    var playerUrl = `http://localhost:3000/api/players/${req.body.position}`;
    if(process.env.NODE_ENV != 'development') {
        playerUrl = `https://cc-fantasy-football.azurewebsites.net/api/players/${req.body.position}`;
    }

    if(req.session.user) {
        const playersQueryResult = await fetch(playerUrl)
        .then(response => response.json())
        .then(result => {
            return {status: 200, data: result.data};
        })
        .catch(error => {
            console.log("ERROR: ", error);
            return {status: 500, data: []};
        });

        if(playersQueryResult.status == 200) {
            res.render('playerDraft', { title : 'Fantasy Football', user: req.session.user, columnName: req.body.columnName, players: playersQueryResult.data });
        } else {
            res.render('error', { message : queryResult.data });
        }
    } else {
        res.render('login', { title : 'Fantasy Football' });
    }

});

// router.post('/', function(req, res) {
//     const connection = new Connection(config);

//     const sql = `SELECT 
//                     Teams.Team,
//                     Players.ID,
//                     Players.Position, 
//                     Players.FirstName, 
//                     Players.LastName,
//                     Players.PassYrds,
//                     Players.RushYrds,
//                     Players.RushAtt,
//                     Players.Rec,
//                     Players.RecYrds,
//                     Players.TDs,
//                     Players.CmpPerc,
//                     Players.Int,
//                     Players.GP
//                 FROM Teams, Players
//                 WHERE Players.TeamID = Teams.ID AND Players.Position = '${req.body.position}'
//                 ORDER BY Players.GP ASC;`;

//     // Attempt to connect and execute queries if connection goes through
//     connection.on("connect", err => {
//         if (err) {
//             console.error(err.message);
//         } else {
//             queryPlayersTable(connection, sql, req, res);
//         }
//     });
// });


// function queryPlayersTable(conn, sqlString, requst, result) {

//     let data = [];
//     const request = new Request(sqlString,
//         (err, rowCount, rows) => {
//             if (err) {
//                 result.render('error', { title : 'Fantasy Football', error: err });
//             } else {
//                 result.render('playerDraft', { title: 'Fantasy Football', user: requst.session.user, players: data });
//             }
//         }
//     );

//     request.on('row', function(row){
//         data.push({
//             team: row[0].value,
//             id: row[1].value,
//             position: row[2].value,
//             firstName: row[3].value,
//             lastName: row[4].value,
//             passYrds: row[5].value,
//             rushYrds: row[6].value,
//             rushAtt: row[7].value,
//             recAtt: row[8].value,
//             recYrds: row[9].value,
//             tds: row[10].value,
//             cmpPerc: row[11].value,
//             int: row[12].value,
//             gamesPlayed: row[13].value
//         });
//     })

//     conn.execSql(request);
// }

module.exports = router;
