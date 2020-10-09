require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
const { Connection, Request } = require("tedious");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { v4: uuidv4 } = require('uuid');

var indexRouter = require('./routes/index');
var statsRouter = require('./routes/stats');
var teamsRouter = require('./routes/teams');
var teamsSortLypRouter = require('./routes/sorters/teamsSortLyp');
var squadSelection = require('./routes/squadSelection');
var squadRankings = require('./routes/squadRankings');
var loginRouter = require('./routes/login');

var app = express();

//const port = process.env.port;

// Create connection to database
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

app.get('/api/teams', (req, res) => {
    const connection = new Connection(config);

    const sql = `SELECT ID, Team, LastYearPts, ThisYearPts
                FROM dbo.Teams
                ORDER BY Team DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryDatabase(connection, sql, res);
        }
    });
});


app.get('/api/teams/sort-lyp', (req, res) => {
    const connection = new Connection(config);

    const sql = `SELECT ID, Team, LastYearPts, ThisYearPts
                FROM dbo.Teams
                ORDER BY LastYearPts DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryDatabase(connection, sql, res);
        }
    });
});

app.get('/api/teams/sort-lyp', (req, res) => {
    const connection = new Connection(config);

    const sql = `SELECT ID, Team, LastYearPts, ThisYearPts
                FROM dbo.Teams
                ORDER BY ThisYearPts DESC;`;

    // Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
        if (err) {
            console.error(err.message);
        } else {
            queryDatabase(connection, sql, res);
        }
    });
});

// Query Functions
function queryDatabase(conn, sqlString, result) {
    console.log("Reading rows from the Table...");

    // Read all rows from table
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

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: uuidv4()}));
app.use(express.static(path.join(__dirname, '/public')));

// Router mounting
app.use('/', indexRouter);
app.use('/stats', statsRouter);
app.use('/teams', teamsRouter);
app.use('/teams/sort-lyp', teamsSortLypRouter);
app.use('/login', loginRouter);
app.use('/squad-selection', squadSelection);
app.use('/squad-rankings', squadRankings);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', {message: err});
});

module.exports = app;
