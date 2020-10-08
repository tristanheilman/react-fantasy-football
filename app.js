var createError = require('http-errors');
var express = require('express');
var path = require('path');
const { Connection, Request } = require("tedious");
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var teamsRouter = require('./routes/teams');

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

// API Functions
app.get('/api/teams', (req, res) => {
  const connection = new Connection(config);

  // Attempt to connect and execute queries if connection goes through
  connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
        queryDatabase(connection, res);
    }
  });
});

// Query Functions
function queryDatabase(conn, result) {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  let data = [];
  const request = new Request(
      `SELECT TOP (1000) [ProductID]
      ,[Name]
      ,[ProductNumber]
      ,[Color]
      ,[StandardCost]
      ,[ListPrice]
      ,[Size]
      ,[Weight]
      ,[ProductCategoryID]
      ,[ProductModelID]
      ,[SellStartDate]
      ,[SellEndDate]
      ,[DiscontinuedDate]
      ,[ThumbNailPhoto]
      ,[ThumbnailPhotoFileName]
      ,[rowguid]
      ,[ModifiedDate]
  FROM [SalesLT].[Product]`,
      (err, rowCount, rows) => {
          if (err) {
              result.send({ status: 500, data: null, message: "Internal Server Error."});
          } else {
              result.send({ status: 200, data: data, message: "OK"});
          }
      }
  );

  request.on('row', function(row){
      data.push({
          id: row[0].value,
          team: row[1].value,
          LastYearPoints: row[2].value,
          ThisYearPoints: row[3].value
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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/teams', teamsRouter);

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
  res.render('error');
});

module.exports = app;
