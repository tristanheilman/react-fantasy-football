var express = require('express');
var router = express.Router();
const { Connection, Request } = require("tedious");

// Database config TODO make env variables on prod and dev machines
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

/*
    User Auth API Queries 
*/
router.post('/register', function(req, res) {
    const connection = new Connection(config);

    const sql = `INSERT INTO dbo.Users (FirstName, LastName, Email, Username, PW) 
                VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.uname}', '${req.body.psw}');`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            addNewUser(connection, sql, res);
        }
    });
});

router.post('/login', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT TOP 1 FirstName, LastName, Username, Email
                FROM dbo.Users
                WHERE Username = '${req.body.uname}' AND PW = '${req.body.psw}';`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryUsersTable(connection, sql, req, res);
        }
    });
});

/*
    NFL Teams API Queries 
*/
router.get('/teams', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT ID, Team, LastYearPts, ThisYearPts
                FROM dbo.Teams
                ORDER BY Team DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryTeamsTable(connection, sql, res);
        }
    });
});

router.get('/teams/sort-lyp', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT ID, Team, LastYearPts, ThisYearPts
                FROM dbo.Teams
                ORDER BY LastYearPts DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryTeamsTable(connection, sql, res);
        }
    });
});

/*
    NFL Players API Queries
*/
router.get('/players', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/search', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID AND
                Players.FirstName + ' ' + Players.LastName LIKE '%%'`;

    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/position-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Position DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/position-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Position ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/first-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.FirstName DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/first-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Position ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/last-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.LastName DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/last-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.LastName ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/passyrds-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.PassYrds DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/passyrds-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.PassYrds ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/rushyrds-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.RushYrds DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/rushyrds-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.RushYrds ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/rushatt-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.RushAtt DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/rushatt-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.RushAtt ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/rec-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Rec DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/rec-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Rec ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/recyrds-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.RecYrds DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/recyrds-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.RecYrds ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/tds-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Tds DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/tds-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.TDs ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/cmpperc-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.CmpPerc DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/cmpperc-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.CmpPerc ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/int-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Int DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/int-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.Int ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/gp-desc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.GP DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/gp-asc', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID
                ORDER BY Players.GP ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/qb', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID AND Players.Position = 'QB'
                ORDER BY Players.GP ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/rb', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID AND Players.Position = 'RB'
                ORDER BY Players.GP ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/te', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID AND Players.Position = 'TE'
                ORDER BY Players.GP ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

router.get('/players/wr', function(req, res) {
    const connection = new Connection(config);

    const sql = `SELECT 
	                Teams.Team, 
                    Players.Position, 
                    Players.FirstName, 
                    Players.LastName,
                    Players.PassYrds,
                    Players.RushYrds,
                    Players.RushAtt,
                    Players.Rec,
                    Players.RecYrds,
                    Players.TDs,
                    Players.CmpPerc,
                    Players.Int,
                    Players.GP
                FROM Teams, Players
                WHERE Players.TeamID = Teams.ID AND Players.Position = 'WR'
                ORDER BY Players.GP ASC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryPlayersTable(connection, sql, res);
        }
    });
});

// Query Functions
function queryUsersTable(conn, sqlString, req, result) {

    let data = [];
    const request = new Request(sqlString,
        (err, rowCount, rows) => {
            if (err) {
                result.redirect('/login');
            } else {
                result.redirect('/');
            }
        }
    );

    request.on('row', function(row){
        req.session.user = {
            firstName: row[0].value,
            lastName: row[1].value,
            userName: row[2].value,
            email: row[3].value,
        }
    })

    conn.execSql(request);
}
function queryTeamsTable(conn, sqlString, result) {

    let data = [];
    const request = new Request(sqlString,
        (err, rowCount, rows) => {
            if (err) {
                result.send({ status: 500, data: err, message: "Internal Server Error."});
            } else {
                result.send({ status: 200, data: data, message: "OK"});
            }
        }
    );

    request.on('row', function(row){
        data.push({
            id: row[0].value,
            team: row[1].value,
            lyp: row[2].value,
            typ: row[3].value
        });
    })

    conn.execSql(request);
}

function queryPlayersTable(conn, sqlString, result) {

    let data = [];
    const request = new Request(sqlString,
        (err, rowCount, rows) => {
            if (err) {
                result.send({ status: 500, data: err, message: "Internal Server Error."});
            } else {
                result.send({ status: 200, data: data, message: "OK"});
            }
        }
    );

    request.on('row', function(row){
        data.push({
            team: row[0].value,
            position: row[1].value,
            firstName: row[2].value,
            lastName: row[3].value,
            passYrds: row[4].value,
            rushYrds: row[5].value,
            rushAtt: row[6].value,
            recAtt: row[7].value,
            recYrds: row[8].value,
            tds: row[9].value,
            cmpPerc: row[10].value,
            int: row[11].value,
            gamesPlayed: row[12].value
        });
    })

    conn.execSql(request);
}

// Insert Functions
function addNewUser(conn, sqlString, result) {
    const request = new Request(sqlString,
        (err, rowCount, rows) => {
            if (err) {
                console.log("ERROR: ", err);
                result.redirect('/register');
            } else {
                result.redirect('/login');
            }
        }
    );

    conn.execSql(request);
}

module.exports = router;