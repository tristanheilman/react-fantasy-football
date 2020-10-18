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
    const connection = new Connection(config);

    if(req.session.user) {

        const sql = `SELECT 
                        Users.FirstName as UserFirstName,
                        Users.LastName as UserLastName,
                        QBPlayer.FirstName as QBFirstName,
                        QBPlayer.LastName as QBLastName,
                        RBAPlayer.FirstName as RB1FirstName,
                        RBAPlayer.LastName as RB1LastName,
                        RBBPlayer.FirstName as RB2FirstName,
                        RBBPlayer.LastName as RB2LastName,
                        TEPlayer.FirstName as TEFirstName,
                        TEPlayer.LastName as TELastName,
                        WRAPlayer.FirstName as WR1FirstName,
                        WRAPlayer.LastName as WR1LastName,
                        WRBPlayer.FirstName as WR2FirstName,
                        WRBPlayer.LastName as WR2LastName,
                        QBTeam.Week1 + RBATeam.Week1 + RBBTeam.Week1 + TETeam.Week1 + WRATeam.Week1 + WRBTeam.Week1 as Week1,
                        QBTeam.Week2 + RBATeam.Week2 + RBBTeam.Week2 + TETeam.Week2 + WRATeam.Week2 + WRBTeam.Week2 as Week2,
                        QBTeam.Week3 + RBATeam.Week3 + RBBTeam.Week3 + TETeam.Week3 + WRATeam.Week3 + WRBTeam.Week3 as Week3,
                        QBTeam.Week4 + RBATeam.Week4 + RBBTeam.Week4 + TETeam.Week4 + WRATeam.Week4 + WRBTeam.Week4 as Week4,
                        QBTeam.Week5 + RBATeam.Week5 + RBBTeam.Week5 + TETeam.Week5 + WRATeam.Week5 + WRBTeam.Week5 as Week5,
                        QBTeam.Week6 + RBATeam.Week6 + RBBTeam.Week6 + TETeam.Week6 + WRATeam.Week6 + WRBTeam.Week6 as Week6,
                        QBTeam.Week7 + RBATeam.Week7 + RBBTeam.Week7 + TETeam.Week7 + WRATeam.Week7 + WRBTeam.Week7 as Week7,
                        QBTeam.Week8 + RBATeam.Week8 + RBBTeam.Week8 + TETeam.Week8 + WRATeam.Week8 + WRBTeam.Week8 as Week8,
                        QBTeam.Week9 + RBATeam.Week9 + RBBTeam.Week9 + TETeam.Week9 + WRATeam.Week9 + WRBTeam.Week9 as Week9,
                        QBTeam.Week10 + RBATeam.Week10 + RBBTeam.Week10 + TETeam.Week10 + WRATeam.Week10 + WRBTeam.Week10 as Week10,
                        QBTeam.Week11 + RBATeam.Week11 + RBBTeam.Week11 + TETeam.Week11 + WRATeam.Week11 + WRBTeam.Week11 as Week11,
                        QBTeam.Week12 + RBATeam.Week12 + RBBTeam.Week12 + TETeam.Week12 + WRATeam.Week12 + WRBTeam.Week12 as Week12,
                        QBTeam.Week13 + RBATeam.Week13 + RBBTeam.Week13 + TETeam.Week13 + WRATeam.Week13 + WRBTeam.Week13 as Week13,
                        QBTeam.Week14 + RBATeam.Week14 + RBBTeam.Week14 + TETeam.Week14 + WRATeam.Week14 + WRBTeam.Week14 as Week14,
                        QBTeam.Week15 + RBATeam.Week15 + RBBTeam.Week15 + TETeam.Week15 + WRATeam.Week15 + WRBTeam.Week15 as Week15,
                        QBTeam.Week16 + RBATeam.Week16 + RBBTeam.Week16 + TETeam.Week16 + WRATeam.Week16 + WRBTeam.Week16 as Week16,
                        QBTeam.Week17 + RBATeam.Week17 + RBBTeam.Week17 + TETeam.Week17 + WRATeam.Week17 + WRBTeam.Week17 as Week17
                    FROM Users
                        LEFT JOIN Players QBPlayer ON Users.QBPlayerID = QBPlayer.ID
                        LEFT JOIN Players RBAPlayer ON Users.RB1PlayerID = RBAPlayer.ID
                        LEFT JOIN Players RBBPlayer ON Users.RB2PlayerID= RBBPlayer.ID
                        LEFT JOIN Players TEPlayer ON Users.TEPlayerID = TEPlayer.ID
                        LEFT JOIN Players WRAPlayer ON Users.WR1PlayerID = WRAPlayer.ID
                        LEFT JOIN Players WRBPlayer ON Users.WR2PlayerID = WRBPlayer.ID
                        LEFT JOIN Teams QBTeam ON QBPlayer.TeamID = QBTeam.ID
                        LEFT JOIN Teams RBATeam ON RBAPlayer.TeamID = RBATeam.ID
                        LEFT JOIN Teams RBBTeam ON RBBPlayer.TeamID = RBBTeam.ID
                        LEFT JOIN Teams TETeam ON TEPlayer.TeamID = TETeam.ID
                        LEFT JOIN Teams WRATeam ON WRAPlayer.TeamID = WRATeam.ID
                        LEFT JOIN Teams WRBTeam ON WRBPlayer.TeamID = WRBTeam.ID
                    order by (case Users.ID when '${req.session.user.id}' then 0 else 1 end);`;

        // Attempt to connect and execute queries if connection goes through
        connection.on("connect", err => {
            if (err) {
                console.error(err.message);
            } else {
                queryUserSquad(connection, sql, req, res);
            }
        });
    } else {
        res.render('login', { title : 'Fantasy Football' });
    }

});


function queryUserSquad(conn, sqlString, req, result) {

    let data = [];
    const request = new Request(sqlString,
        (err, rowCount, rows) => {
            if (err) {
                result.render('error', { message : err });
            } else {
                result.render('squadSelection', { title : 'Fantasy Football', user: req.session.user, squads: data});
            }
        }
    );

    request.on('row', function(row){
        data.push({
            userFirstName: row[0].value,
            userLastName: row[1].value,
            qbFirstName: row[2].value,
            qbLastName: row[3].value,
            rb1FirstName: row[4].value,
            rb1LastName: row[5].value,
            rb2FirstName: row[6].value,
            rb2LastName: row[7].value,
            teFirstName: row[8].value,
            teLastName: row[9].value,
            wr1FirstName: row[10].value,
            wr1LastName: row[11].value,
            wr2FirstName: row[12].value,
            wr2LastName: row[13].value,
            week1: row[14].value,
            week2: row[15].value,
            week3: row[16].value,
            week4: row[17].value,
            week5: row[18].value,
            week6: row[19].value,
            week7: row[20].value,
            week8: row[21].value,
            week9: row[22].value,
            week10: row[23].value,
            week11: row[24].value,
            week12: row[25].value,
            week13: row[26].value,
            week14: row[27].value,
            week16: row[28].value,
            week17: row[29].value
        });
    })

    conn.execSql(request);
}



module.exports = router;
