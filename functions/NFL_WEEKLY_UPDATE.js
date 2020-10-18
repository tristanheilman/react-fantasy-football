/*
    This code was written within Azure's Function App Code + Test sandbox.
    Nothing written in here is used within the web application. The exported function
    is set on a timer to run every Monday at 3 am. It will fetch the current week
    of the NFL season and then fetch the W/L/T for every team and construct
    a SQL statement accordingly. It will execute the statement, updating points
    for a team. All associated team points relate directly to players through a
    foreign key.
*/

const fetch = require("node-fetch");
const { Connection, Request } = require("tedious");

module.exports = function (context, myTimer) {
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

    var timeStamp = new Date().toISOString();

    /* Steps

    1. Fetch the current weeks scores
    2. Format the resultant data to fit our sql database structure
    3. Insert data into our sql database for the current weeks scores
    4. Update Player fantasy scores respectively (based upon their teams W/L)
    5. Update User total fantasy score based upon their drafted players week performance

    */

    const connection = new Connection(config);

    let result = fetch(`https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=22f30d0cc8c04c6b897284cf457749e3`)
    .then(result => result.json())
    .then(weekNumber => {
        let season = 2020;
        let week = weekNumber;

        let weekString = "Week" + weekNumber;

        context.log("WEEK NUM: ", weekNumber);

        let result = fetch(`https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/${season}/${week}?key=22f30d0cc8c04c6b897284cf457749e3`)
        .then(result => result.json())
        .then(result => {

            let sqlString = ``;

            result.forEach(item => {
                if(item.AwayScore > item.HomeScore) {
                    sqlString += `UPDATE Teams SET ${weekString} = 1 WHERE TeamABR = '${item.AwayTeam}';`;
                    sqlString += `UPDATE Teams SET ${weekString} = 0 WHERE TeamABR = '${item.HomeTeam}';`;
                } else if(item.AwayScore < item.HomeScore) {
                    sqlString += `UPDATE Teams SET ${weekString} = 1 WHERE TeamABR = '${item.HomeTeam}';`;
                    sqlString += `UPDATE Teams SET ${weekString} = 0 WHERE TeamABR = '${item.AwayTeam}';`;
                } else {
                    sqlString += `UPDATE Teams SET ${weekString} = 0.5 WHERE TeamABR = '${item.AwayTeam}';`;
                    sqlString += `UPDATE Teams SET ${weekString} = 0.5 WHERE TeamABR = '${item.HomeTeam}';`;
                }
            });
        
            context.log("SQL: ", sqlString);

            return sqlString;
        })
        .then(sql => {
            // Attempt to connect and execute queries if connection goes through
            let result = connection.on("connect", err => {
                if (err) {
                    context.log("UNSUCCESSFUL CONNECTION! ", err.message);
                    return {
                        status: 400
                    }
                } else {
                    executeStatement(sql);
                }
            });

            return {
                status: 200
            };
        });
    });

    function executeStatement(sql) {
        const request = new Request(sql,
            (err, rowCount, rows) => {
                if (err) {
                    context.log("UNSUCCESSFUL UPDATE! ", err);
                } else {
                    context.log("SUCCESSFUL UPDATE!");
                }
            }
        );

        connection.execSql(request);
    }

    console.log("RESULT: ", result);
    
    if (myTimer.IsPastDue)
    {
        context.log('JavaScript is running late!');
    }

    context.log('JavaScript timer trigger function ran!', timeStamp);   
};