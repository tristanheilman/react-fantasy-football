require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
const { v4: uuidv4 } = require('uuid');

var indexRouter = require('./routes/index');
var playersRouter = require('./routes/players');
var teamsRouter = require('./routes/teams');
var squadSelection = require('./routes/squadSelection');
var playerDraftRouter = require('./routes/playerDraft');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: uuidv4()}));
app.use(express.static(path.join(__dirname, '/public')));

// Router mounting
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/players', playersRouter);
app.use('/teams', teamsRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/squad-selection', squadSelection);
app.use('/player-draft', playerDraftRouter);

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
